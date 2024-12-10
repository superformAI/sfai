// app/(marketing)/waitlist/page.tsx
"use client";
import React, { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoinWaitlist = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/join-waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Thank you for joining the waitlist! Check your email for a confirmation.");
      setEmail("");
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h2 className="text-2xl font-semibold">Join the Waitlist</h2>
      {!submitted ? (
        <form onSubmit={handleJoinWaitlist} className="mt-4 flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hi@example.com"
            className="p-2 border border-gray-300 rounded-lg mb-4"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Join Waitlist
          </button>
        </form>
      ) : (
        <p className="text-green-500 mt-4">Thank you! Please check your email for confirmation.</p>
      )}
    </div>
  );
}
