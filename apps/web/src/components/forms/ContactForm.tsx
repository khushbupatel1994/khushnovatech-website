"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { z } from "zod";
import { services } from "@/data/services";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().default(""),
  phone_number: z.string().trim().regex(/^[+\d()\s-]{7,20}$/),
  email: z.string().trim().email().max(254),
  service: z.string().trim().min(2).max(120),
  project_type: z.string().trim().min(2).max(100),
  budget: z.string().trim().max(100).optional().default("Not specified"),
  timeline: z.string().trim().min(2).max(100),
  message: z.string().trim().min(10).max(5000),
});

type Status = "idle" | "loading" | "success" | "error";

const projectTypes = [
  "New website",
  "Web application / API",
  "Android app",
  "UI/UX or product design",
  "Automation or integration",
  "SEO / digital marketing",
  "Website maintenance",
  "Other",
];

const budgetOptions = [
  "Not decided yet",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹1,50,000",
  "₹1,50,000+",
  "Prefer to discuss",
];

const timelineOptions = ["As soon as possible", "Within 1 month", "1–3 months", "Flexible"];

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

    const parsed = schema.safeParse({
      name: values.get("name"),
      company: values.get("company"),
      phone_number: values.get("phone_number"),
      email: values.get("email"),
      service: values.get("service"),
      project_type: values.get("project_type"),
      budget: values.get("budget"),
      timeline: values.get("timeline"),
      message: values.get("message"),
    });

    if (!parsed.success) {
      setStatus("error");
      setFeedback("Please check the required details and try again.");
      return;
    }

    busy.current = true;
    setStatus("loading");
    setFeedback("Sending your project brief…");
    const accessKey = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "replace_with_your_w3forms_access_key") {
      setStatus("error");
      setFeedback("The contact form is not configured yet. Please email khushbu9834@gmail.com directly.");
      busy.current = false;
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("https://api.w3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          access_key: accessKey,
          subject: `New ${parsed.data.service} enquiry from ${parsed.data.name}`,
          from_name: "KhushNovaTech Website",
          replyto: parsed.data.email,
          botcheck: "",
        }),
        signal: controller.signal,
      });
      const result: unknown = await response.json();
      const confirmation = z.object({
        success: z.union([z.boolean(), z.string()]).optional(),
        message: z.string().optional(),
        error: z.string().optional(),
      }).safeParse(result);
      const providerSuccess = confirmation.data?.success === true || confirmation.data?.success === "true";

      if (!response.ok || !providerSuccess) {
        throw new Error(confirmation.data?.message ?? confirmation.data?.error ?? "Submission not confirmed");
      }

      form.reset();
      setStatus("success");
      setFeedback("Thank you! Your project brief was sent. We will get back to you soon.");
    } catch (error) {
      setStatus("error");
      const errorMessage = error instanceof Error ? error.message : "";
      if (error instanceof DOMException && error.name === "AbortError") {
        setFeedback("The submission timed out. Please try again.");
      } else if (errorMessage === "Failed to fetch") {
        setFeedback("Submission was blocked. Please check the website domain restriction in Web3Forms.");
      } else if (errorMessage && errorMessage !== "Submission not confirmed") {
        setFeedback(`W3Forms: ${errorMessage}`);
      } else {
        setFeedback("We could not send your brief. Please try again.");
      }
    } finally {
      clearTimeout(timer);
      busy.current = false;
    }
  }

  return (
    <div className="contact-card">
      <h2>Tell us about your project</h2>
      <p>Share the essentials and we&apos;ll come back with the right next step. Fields marked with * are required.</p>
      <form onSubmit={handleSubmit} aria-busy={status === "loading"}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Full name *</label>
            <input id="name" name="name" autoComplete="name" minLength={2} maxLength={100} required />
          </div>
          <div className="field">
            <label htmlFor="company">Company / brand</label>
            <input id="company" name="company" autoComplete="organization" maxLength={120} />
          </div>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="email">Email address *</label>
            <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number *</label>
            <input id="phone" name="phone_number" type="tel" autoComplete="tel" minLength={7} maxLength={20} required />
          </div>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="service">Service needed *</label>
            <select id="service" name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="project_type">Project type *</label>
            <select id="project_type" name="project_type" defaultValue="" required>
              <option value="" disabled>Select project type</option>
              {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="timeline">Expected timeline *</label>
            <select id="timeline" name="timeline" defaultValue="" required>
              <option value="" disabled>Choose a timeline</option>
              {timelineOptions.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="budget">Approx. budget</label>
            <select id="budget" name="budget" defaultValue="Not decided yet">
              {budgetOptions.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Project goals and details *</label>
          <textarea id="message" name="message" rows={6} minLength={10} maxLength={5000} placeholder="What are you building, who is it for, and what should it achieve?" required />
        </div>

        <div className="honeypot" aria-hidden="true">
          <label htmlFor="botcheck">Leave empty</label>
          <input id="botcheck" name="botcheck" tabIndex={-1} autoComplete="off" />
        </div>

        <button className="submit" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send project brief"}
        </button>
        <p className={`form-status ${status === "error" ? "error" : status === "success" ? "success" : ""}`} role={status === "error" ? "alert" : "status"} aria-live="polite">
          {feedback}
        </p>
      </form>
    </div>
  );
}
