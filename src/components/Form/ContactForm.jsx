"use client";

import Image from "next/image";
import InputField from "./InputField";
import Button from "../UI/Button";
import { useState } from "react";
import Copy from "../Animations/gsap-anim/TextAnimation";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Enter a valid email address.";
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Thank you! Your message has been sent.");
        setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full z-20 max-h-screen overflow-hidden">
      {/* Background Image */}
      <Image src="/image/contact/ciotto_cupxgatti_chair.avif" alt="White Ciotto Cup on top of the brown Gatti chair." fill className="absolute inset-0 w-full h-full object-cover z-0" priority quality={100} />

      {/* Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] xl:grid-cols-[55%_45%] z-10">
        {/* Left side - just empty to show image */}
        <div />
        {/* Right side - Contact Form */}
        <div className="flex items-center justify-center bg-primary-text/90 backdrop-blur-xl px-[25px] md:px-[97px] h-screen">
          <div className="w-full text-secondary-text">
            <div className="mb-8">
              <Copy delay={0.5}>
                <h2 className="h2-small uppercase mb-2">Ari Prasetya</h2>
              </Copy>
              {/* Responsive h1: one line on md+, two lines on mobile/tablet */}
              <Copy delay={0.5}>
                <h1 className="h1-small font-medium uppercase leading-tight">
                  Contact
                  <br />
                  For Inquiries
                </h1>
              </Copy>
            </div>

            <form className="flex flex-col space-y-6 w-full" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="First Name" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} error={!!errors.firstName} errorMessage={errors.firstName} />
                <InputField label="Last Name" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} error={!!errors.lastName} errorMessage={errors.lastName} />
              </div>
              <InputField label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} error={!!errors.email} errorMessage={errors.email} />
              <InputField label="Subject" id="subject" name="subject" value={form.subject} onChange={handleChange} error={!!errors.subject} errorMessage={errors.subject} />
              <InputField label="Message" id="message" name="message" textarea rows={5} value={form.message} onChange={handleChange} placeholder="Type your message here..." error={!!errors.message} errorMessage={errors.message} />
              <div className="flex justify-center">
                <Button variant="secondary" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </Button>
              </div>
              {status && <p className="text-center mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
