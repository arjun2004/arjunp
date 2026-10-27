/**
 * YouTube playlists for the mini player. Each id was checked against YouTube's
 * oEmbed endpoint. To swap one out, open the playlist on YouTube and copy the
 * `list=` value out of the URL.
 */
export type Playlist = {
  id: string;
  title: string;
  artist: string;
  channel: string;
};

export const playlists: Playlist[] = [
  {
    id: "PLPNKnwlz-OnZcgTuCwVCcqx-1BdW2xDm1",
    title: "Mix",
    artist: "Tame Impala",
    channel: "Tame Impala - Topic",
  },
  {
    id: "PLTU9Rfr3yfoe3qtcy7JC2ugwVLwjEO1xQ",
    title: "Currents",
    artist: "Tame Impala",
    channel: "tameimpalaVEVO",
  },
  {
    id: "PL9tY0BWXOZFuT9vGuX9kIhwG5jhGSWdX2",
    title: "Deadbeat",
    artist: "Tame Impala",
    channel: "Vevo",
  },
];
