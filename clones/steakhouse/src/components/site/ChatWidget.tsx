"use client";

import { useState, type FormEvent } from "react";
import { setChatOpen, useUI } from "@/lib/ui-store";
import { AttachIcon, ChatBubbleIcon, ChatCloseIcon, EmojiIcon } from "./icons";
import styles from "./ChatWidget.module.css";

type Message = { id: number; text: string; from: "visitor" | "notice" };

/** Wix Chat bubble + panel. Messages stay in the page; nothing is sent. */
export function ChatWidget() {
  const { chatOpen, overlay } = useUI();
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => {
      const next: Message[] = [...prev, { id: prev.length + 1, text, from: "visitor" }];
      if (!prev.some((m) => m.from === "notice")) {
        next.push({ id: prev.length + 2, text: "Chat is not connected in this local clone — your message was not sent.", from: "notice" });
      }
      return next;
    });
    setDraft("");
  };

  return (
    <>
      <button
        type="button"
        className={styles.bubble}
        aria-label="Chat"
        aria-expanded={chatOpen}
        data-hidden={chatOpen || overlay === "mobile-menu" || undefined}
        onClick={() => setChatOpen(true)}
      >
        <ChatBubbleIcon className={styles.bubbleIcon} />
      </button>
      {chatOpen && (
        <section className={styles.panel} aria-label="Wix Chat">
          <header className={styles.head}>
            <h2 className={`${styles.title} lulo`}>Restaurant</h2>
            <p className={styles.status}>
              <span className={styles.dot} />
              We&rsquo;ll reply as soon as we can
            </p>
            <button type="button" className={styles.close} aria-label="Minimize Chat" onClick={() => setChatOpen(false)}>
              <ChatCloseIcon />
            </button>
          </header>
          <div className={styles.body}>
            {messages.map((m) => (
              <p key={m.id} className={m.from === "visitor" ? styles.msg : styles.notice}>
                {m.text}
              </p>
            ))}
          </div>
          <form className={styles.footer} onSubmit={send}>
            <textarea
              className={styles.input}
              placeholder="Write your message..."
              aria-label="Write your message..."
              rows={1}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) send(e);
              }}
            />
            <span className={styles.emoji} aria-hidden="true">
              <EmojiIcon />
            </span>
            <span className={styles.attach} aria-hidden="true">
              <AttachIcon />
            </span>
          </form>
        </section>
      )}
    </>
  );
}
