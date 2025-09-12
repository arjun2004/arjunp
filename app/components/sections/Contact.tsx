"use client";
import React, { useState } from "react";

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    {children}
  </section>
);
const headingClass =
  "text-3xl md:text-4xl font-bold mb-12 text-center text-neutral-800 dark:text-neutral-100 tracking-tight";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwpnzlqr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setFeedback("Thanks! Your message has been sent.");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        setStatus("error");
        setFeedback(message);
      }
    } catch (error) {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };
  return (
    <Section id="contact">
      <h2 className={headingClass}>Get in Touch</h2>
      <div className="max-w-2xl mx-auto p-8 bg-white/50 dark:bg-neutral-800/50 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700">
        <p className="text-center text-neutral-600 dark:text-neutral-300 mb-8">
          I&apos;m currently open to new opportunities and collaborations. Feel
          free to reach out via email or this form. Let&apos;s build something
          amazing together!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 transition-colors"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          {status !== "idle" && feedback && (
            <div
              className={`text-sm rounded-md px-4 py-3 border transition-colors ${
                status === "success"
                  ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                  : status === "error"
                  ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
                  : "bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700"
              }`}
              role={status === "error" ? "alert" : undefined}
            >
              {feedback}
            </div>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 px-4 rounded-lg text-white font-semibold bg-cyan-500 hover:bg-cyan-600 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-neutral-900 transition-all duration-300 transform hover:scale-105"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
