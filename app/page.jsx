"use client";
import { useState } from "react";
export default function AREnterprisesWebsite() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "New client"}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}
Company Name: ${form.company}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}`
    );
    window.location.href = `mailto:arenterprisesslough@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">A R Enterprises (Slough) Limited</h1>
            <p className="text-sm text-slate-600">Professional booking and customer care support for taxi companies</p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#why-us" className="hover:text-slate-600">Why Us</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">
            Reliable outsourced support for taxi operators
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Professional booking and customer care services for taxi companies
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-8">
            We help taxi businesses handle bookings, customer enquiries, ride coordination, and day-to-day support with a dependable, professional service.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 px-6 py-3 text-white font-medium shadow-sm hover:bg-slate-800"
            >
              Get a Quote
            </a>
            <a
              href="https://wa.me/447586716231"
              className="rounded-2xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Booking management</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Customer care</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Back-office support</span>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Service Focus</p>
              <p className="mt-2 text-lg font-semibold">Taxi booking support</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Customer Care</p>
              <p className="mt-2 text-lg font-semibold">Calls, queries, updates</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Operations</p>
              <p className="mt-2 text-lg font-semibold">Dispatch coordination</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Support</p>
              <p className="mt-2 text-lg font-semibold">Reliable business assistance</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="text-3xl font-bold tracking-tight">Our Services</h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
              <h4 className="text-xl font-semibold">Booking Management</h4>
              <p className="mt-4 text-slate-600 leading-7">
                Handling incoming booking requests efficiently and professionally to help taxi companies serve customers better.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
              <h4 className="text-xl font-semibold">Customer Care</h4>
              <p className="mt-4 text-slate-600 leading-7">
                Managing customer queries, updates, and support communications with a helpful and professional approach.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
              <h4 className="text-xl font-semibold">Back Office Support</h4>
              <p className="mt-4 text-slate-600 leading-7">
                Providing admin and coordination support to keep daily transport operations organised and responsive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-3xl font-bold tracking-tight">About Us</h3>
          <p className="mt-6 text-slate-600 leading-8">
            A R Enterprises (Slough) Limited supports taxi companies with booking, customer service, and operational assistance. Our goal is to help transport businesses improve responsiveness, customer satisfaction, and daily efficiency.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h4 className="text-xl font-semibold">Who we work with</h4>
          <ul className="mt-5 space-y-3 text-slate-600">
            <li>• Local taxi operators</li>
            <li>• Private hire businesses</li>
            <li>• Transport companies needing booking support</li>
            <li>• Businesses looking for reliable outsourced customer care</li>
          </ul>
        </div>
      </section>

      <section id="why-us" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="text-3xl font-bold tracking-tight">Why Choose Us</h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white/10 p-8 border border-white/10">
              <h4 className="text-xl font-semibold">Professional Service</h4>
              <p className="mt-4 text-slate-200 leading-7">We represent your business with clear communication and dependable support.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-8 border border-white/10">
              <h4 className="text-xl font-semibold">Industry Focus</h4>
              <p className="mt-4 text-slate-200 leading-7">Our services are tailored for taxi and transport-related business operations.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-8 border border-white/10">
              <h4 className="text-xl font-semibold">Flexible Support</h4>
              <p className="mt-4 text-slate-200 leading-7">From customer care to booking coordination, we adapt to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <h3 className="text-3xl font-bold tracking-tight">Contact Us</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Ready to discuss booking and customer care support for your taxi business? Get in touch with us today.
            </p>
            <div className="mt-8 grid gap-6 text-slate-700">
              <div>
                <p className="font-semibold">Company</p>
                <p className="mt-2">A R Enterprises (Slough) Limited</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="mt-2">64 Burnham Lane, Slough, England, SL1 6LS</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:arenterprisesslough@gmail.com" className="mt-2 inline-block text-slate-900 underline underline-offset-4">arenterprisesslough@gmail.com</a>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+447586716231" className="mt-2 inline-block text-slate-900 underline underline-offset-4">+44 7586 716231</a>
              </div>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <a href="https://wa.me/447586716231" className="mt-2 inline-block text-slate-900 underline underline-offset-4">Chat on WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm bg-slate-50">
            <h3 className="text-2xl font-bold tracking-tight">Enquiry Form</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Send us your details and a short message about the support you need.
            </p>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input type="text" value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Taxi company name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Your email" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Your phone number" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Tell us what support you need" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"></textarea>
              </div>
              <button type="submit" className="rounded-2xl bg-slate-900 px-6 py-3 text-white font-medium shadow-sm hover:bg-slate-800">
                Send Enquiry by Email
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}