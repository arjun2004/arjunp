"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Disc3,
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { playlists } from "@/app/data/player";

// Minimal shape of the bits of the YouTube IFrame API we actually call.
type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  nextVideo: () => void;
  previousVideo: () => void;
  mute: () => void;
  unMute: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  loadPlaylist: (opts: { list: string; listType: string; index?: number }) => void;
  getVideoData: () => { title?: string; author?: string; video_id?: string };
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const API_SRC = "https://www.youtube.com/iframe_api";

/** Loads the IFrame API once and resolves when YT is ready. */
let apiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<void>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.querySelector(`script[src="${API_SRC}"]`)) {
      const tag = document.createElement("script");
      tag.src = API_SRC;
      tag.async = true;
      document.head.appendChild(tag);
    }
  });
  return apiPromise;
}

const fmt = (s: number) => {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const MiniPlayer = () => {
  const reduce = useReducedMotion();
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [track, setTrack] = useState("");
  const [videoId, setVideoId] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [listIndex, setListIndex] = useState(0);
  // The API is only pulled in once the visitor actually opens the player.
  const [booted, setBooted] = useState(false);

  const list = playlists[listIndex];

  const syncTrack = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    const data = p.getVideoData?.();
    if (data?.title) setTrack(data.title);
    if (data?.video_id) setVideoId(data.video_id);
  }, []);

  useEffect(() => {
    if (!booted || playerRef.current || !mountRef.current) return;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT || !mountRef.current) return;
      playerRef.current = new window.YT.Player(mountRef.current, {
        width: "356",
        height: "200",
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          listType: "playlist",
          list: playlists[0].id,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            setReady(true);
            syncTrack();
          },
          onStateChange: (e: { data: number }) => {
            const s = window.YT?.PlayerState;
            if (!s) return;
            setPlaying(e.data === s.PLAYING);
            if (e.data === s.PLAYING) syncTrack();
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [booted, syncTrack]);

  // The API has no "track changed" event, so poll for title + position.
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      syncTrack();
      setElapsed(p.getCurrentTime?.() ?? 0);
      setDuration(p.getDuration?.() ?? 0);
    }, 500);
    return () => clearInterval(t);
  }, [playing, syncTrack]);

  const toggleOpen = () => {
    setBooted(true);
    setOpen((v) => !v);
  };

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  };

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;
    if (muted) p.unMute();
    else p.mute();
    setMuted(!muted);
  };

  const switchList = (i: number) => {
    setListIndex(i);
    playerRef.current?.loadPlaylist({
      list: playlists[i].id,
      listType: "playlist",
      index: 0,
    });
  };

  const scrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const to = Number(e.target.value);
    setElapsed(to);
    playerRef.current?.seekTo(to, true);
  };

  const pct = duration > 0 ? (elapsed / duration) * 100 : 0;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {/*
        Audio-only: the player itself is parked off-screen so the widget reads
        as a music player rather than an embedded video.
      */}
      <div
        aria-hidden
        className="pointer-events-none fixed -left-[9999px] top-0 h-[200px] w-[356px] overflow-hidden opacity-0"
      >
        <div ref={mountRef} />
      </div>

      {/* panel */}
      <div
        className={`origin-bottom-right overflow-hidden rounded-2xl border border-border bg-raised shadow-2xl transition-all duration-300 ${
          open
            ? "pointer-events-auto w-[20rem] max-w-[calc(100vw-2.5rem)] opacity-100"
            : "pointer-events-none h-0 w-0 scale-90 border-0 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
            {playing ? "Now playing" : "Paused"}
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Collapse player"
            className="grid h-6 w-6 place-items-center rounded-full text-fg-subtle transition-colors hover:text-fg"
          >
            <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3.5">
            {/* album art, pulled from the track's thumbnail */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-ink-800">
              {videoId ? (
                <Image
                  src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                  alt=""
                  fill
                  unoptimized
                  sizes="64px"
                  className="scale-[1.45] object-cover"
                />
              ) : (
                <span className="grid h-full w-full place-items-center text-fg-subtle">
                  <Music2 className="h-5 w-5" strokeWidth={1.6} />
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-fg" title={track}>
                {track || `${list.artist} — ${list.title}`}
              </p>
              <p className="mt-0.5 truncate font-mono text-[11px] text-fg-subtle">
                {list.artist} · {list.title}
              </p>
            </div>
          </div>

          {/* scrubber */}
          <div className="mt-4">
            <div className="relative h-1 w-full rounded-full bg-fg/[0.12]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
                style={{ width: `${pct}%` }}
              />
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={elapsed}
                onChange={scrub}
                disabled={!ready || !duration}
                aria-label="Seek"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-default"
              />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-fg-subtle">
              <span>{fmt(elapsed)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => playerRef.current?.previousVideo()}
              disabled={!ready}
              aria-label="Previous track"
              className="grid h-8 w-8 place-items-center rounded-full text-fg-muted transition-colors hover:text-accent-fg disabled:opacity-40"
            >
              <SkipBack className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={togglePlay}
              disabled={!ready}
              aria-label={playing ? "Pause" : "Play"}
              className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white transition-all hover:brightness-110 disabled:opacity-40 dark:text-ink-950"
            >
              {playing ? (
                <Pause className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              ) : (
                <Play className="ml-0.5 h-4 w-4" fill="currentColor" strokeWidth={0} />
              )}
            </button>
            <button
              type="button"
              onClick={() => playerRef.current?.nextVideo()}
              disabled={!ready}
              aria-label="Next track"
              className="grid h-8 w-8 place-items-center rounded-full text-fg-muted transition-colors hover:text-accent-fg disabled:opacity-40"
            >
              <SkipForward className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={toggleMute}
              disabled={!ready}
              aria-label={muted ? "Unmute" : "Mute"}
              className="ml-auto grid h-8 w-8 place-items-center rounded-full text-fg-muted transition-colors hover:text-accent-fg disabled:opacity-40"
            >
              {muted ? (
                <VolumeX className="h-4 w-4" strokeWidth={1.8} />
              ) : (
                <Volume2 className="h-4 w-4" strokeWidth={1.8} />
              )}
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border pt-3">
            {playlists.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => switchList(i)}
                className={`rounded-full border px-2.5 py-1 text-[11px] transition-colors ${
                  i === listIndex
                    ? "border-accent/45 bg-accent/10 text-accent-fg"
                    : "border-border text-fg-subtle hover:text-fg"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* dock button */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? "Collapse music player" : "Open music player"}
        aria-expanded={open}
        className="group flex items-center gap-2.5 rounded-full border border-border bg-raised py-2 pl-2 pr-4 shadow-lg transition-colors hover:border-accent/50"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/12 text-accent-fg ring-1 ring-accent/25">
          <Disc3
            className={`h-[18px] w-[18px] ${
              playing && !reduce ? "animate-[spin_3.5s_linear_infinite]" : ""
            }`}
            strokeWidth={1.6}
          />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted transition-colors group-hover:text-fg">
          {playing ? "Playing" : "Music"}
        </span>
      </button>
    </div>
  );
};

export default MiniPlayer;
