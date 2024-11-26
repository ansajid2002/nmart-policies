"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Deleteform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
      });
      return;
    }

    setSubmitting(true);

    // Construct the mailto link
    const subject = encodeURIComponent("Account Deletion Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nReason for deletion: ${message}`
    );
    const mailtoLink = `mailto:support@example.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoLink;

    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      Swal.fire({
        title: "Success!",
        text: "Please check your email client to send the deletion request.",
        icon: "success",
      });
    }, 1000);
  };

  return (
    <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6">
          <textarea
            rows="6"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Reason for account deletion"
            className="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-8 py-3 bg-[#fb7701] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            {submitting ? <span>Submitting...</span> : <span>Submit</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Deleteform;
