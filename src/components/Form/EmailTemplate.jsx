import * as React from "react";

export const EmailTemplate = ({ firstName, subject, message }) => (
  <div>
    <h2>Hi {firstName},</h2>
    <p>Thank you for reaching out! We have received your message:</p>
    <blockquote>
      <b>Subject:</b> {subject}
      <br />
      <b>Message:</b> {message}
    </blockquote>
    <p>We will get back to you as soon as possible.</p>
    <br />
    <p>
      Best regards,
      <br />
      The Ciotto team
    </p>
  </div>
);
