"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone_number: z.string().trim().regex(/^[+\d()\s-]{7,20}$/),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const busy = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    if (String(values.get("botcheck") ?? "").trim()) return;
    const parsed = schema.safeParse({ name: values.get("name"), phone_number: values.get("phone_number"), email: values.get("email"), message: values.get("message") });
    if (!parsed.success) {
      setStatus("error");
      setFeedback("Please check your details. Message must be at least 10 characters.");
      return;
    }
    const key = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY;
    if (!key || key === "replace_with_your_w3forms_access_key") {
      setStatus("error");
      setFeedback("Contact form is not configured yet.");
      return;
    }
    busy.current = true;
    setStatus("loading");
    setFeedback("Sending your message…");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("https://api.w3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...parsed.data, access_key: key, subject: "New KhushNovaTech inquiry", from_name: "KhushNovaTech Website", botcheck: "" }),
        signal: controller.signal,
      });
      const result: unknown = await response.json();
      const data = z.object({ success: z.boolean().optional() }).safeParse(result);
      if (!response.ok || data.data?.success !== true) throw new Error("Submission not confirmed");
      form.reset();
      setStatus("success");
      setFeedback("Thank you! Your message was accepted. We will get back to you.");
    } catch {
      setStatus("error");
      setFeedback("We could not confirm submission. Please check before retrying.");
    } finally {
      clearTimeout(timer);
      busy.current = false;
    }
  }

  return <div className="contact-card"><h2>Tell us about your project</h2><p>Fields marked with * are required. Your message is sent through W3Forms for email delivery.</p><form onSubmit={handleSubmit} aria-busy={status === "loading"}><div className="form-grid"><div className="field"><label htmlFor="name">Full name *</label><input id="name" name="name" autoComplete="name" minLength={2} maxLength={100} required /></div><div className="field"><label htmlFor="phone">Phone number *</label><input id="phone" name="phone_number" type="tel" autoComplete="tel" minLength={7} maxLength={20} required /></div></div><div className="field"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required /></div><div className="field"><label htmlFor="message">Message / project details *</label><textarea id="message" name="message" rows={6} minLength={10} maxLength={5000} required /></div><div className="honeypot" aria-hidden="true"><label htmlFor="botcheck">Leave empty</label><input id="botcheck" name="botcheck" tabIndex={-1} autoComplete="off" /></div><button className="submit" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send message"}</button><p className={`form-status ${status === "error" ? "error" : status === "success" ? "success" : ""}`} role={status === "error" ? "alert" : "status"} aria-live="polite">{feedback}</p></form></div>;
}

