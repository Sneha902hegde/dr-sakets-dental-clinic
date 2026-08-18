import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarPlus, RotateCcw, CheckCircle2, AlertCircle, Loader2, User, Phone, Mail,
} from 'lucide-react';
import { Reveal } from '../Reveal';
import { treatmentOptions, timeSlots } from '../../data/contact';
import { supabase } from '../../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FormState = {
  name: string;
  phone: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  service: string;
  message: string;
  contact_method: string;
};

const initial: FormState = {
  name: '',
  phone: '',
  email: '',
  preferred_date: '',
  preferred_time: '',
  service: '',
  message: '',
  contact_method: 'Phone',
};

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (status === 'error') setStatus('idle');
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Please enter your full name.';
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) return 'Please enter a valid phone number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return 'Please enter a valid email address.';
    if (!form.service) return 'Please select a treatment you are interested in.';
    if (!form.contact_method) return 'Please choose a preferred contact method.';
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus('error');
      setErrorMsg(err);
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      service: form.service,
      preferred_date: form.preferred_date || null,
      preferred_time: form.preferred_time || null,
      message: form.message.trim() || null,
      contact_method: form.contact_method,
    };

    if (!supabase) {
      setStatus('error');
      setErrorMsg('The appointment service is temporarily unavailable. Please call or WhatsApp the clinic directly.');
      return;
    }

    const { error } = await supabase.from('appointments').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong while sending your request. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setForm(initial);
  };

  const inputBase =
    'w-full rounded-2xl border bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-1';
  const inputIdle = 'border-ink-200 hover:border-ink-300';
  const inputError = 'border-rose-400 bg-rose-50/40';
  const inputOk = 'border-emerald-300 bg-emerald-50/30';

  const fieldState = (value: string, required: boolean) =>
    status === 'error' && required && !value ? inputError : value ? inputOk : inputIdle;

  return (
    <section id="book" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Copy column */}
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">Book Appointment</span>
            <h2 className="section-title mt-4 text-balance">Request your consultation</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Fill in a few details and our team will call or message you back to confirm a time that
              suits you. Prefer to talk now? Call us directly — we're happy to help.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Personalized care</p>
                  <p className="text-sm text-ink-500">Every request is reviewed by Dr. Saket's team.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Quick response</p>
                  <p className="text-sm text-ink-500">We usually reply within clinic hours the same day.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">No obligation</p>
                  <p className="text-sm text-ink-500">Booking a consultation doesn't commit you to treatment.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your full name"
                      className={`${inputBase} ${fieldState(form.name, true)}`}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Phone Number" required>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+91 99728 04333"
                      className={`${inputBase} ${fieldState(form.phone, true)}`}
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email Address">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      className={`${inputBase} ${fieldState(form.email, false)}`}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Preferred Date">
                    <input
                      type="date"
                      value={form.preferred_date}
                      onChange={(e) => update('preferred_date', e.target.value)}
                      className={`${inputBase} ${inputIdle}`}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Preferred Time">
                    <select
                      value={form.preferred_time}
                      onChange={(e) => update('preferred_time', e.target.value)}
                      className={`${inputBase} ${inputIdle}`}
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Treatment Interested In" required>
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={`${inputBase} ${fieldState(form.service, true)}`}
                    >
                      <option value="">Select a treatment</option>
                      {treatmentOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us briefly about your concern or any questions you have."
                    className={`${inputBase} ${inputIdle} resize-none`}
                  />
                </Field>

                <Field label="Preferred Contact Method" required>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Phone', 'WhatsApp', 'Email'].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => update('contact_method', m)}
                        className={`rounded-2xl border px-3 py-3 text-sm font-medium transition-all duration-200 ${
                          form.contact_method === m
                            ? 'border-primary-600 bg-primary-50 text-primary-700 ring-2 ring-primary-200'
                            : 'border-ink-200 bg-white text-ink-600 hover:border-primary-300'
                        }`}
                        aria-pressed={form.contact_method === m}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </Field>

                {/* Error / success messages */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-start gap-3 rounded-2xl bg-rose-50 p-4 text-sm text-rose-700 ring-1 ring-rose-100"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700 ring-1 ring-emerald-100"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <span>
                        Thank you! Your appointment request has been sent. Our team will contact you
                        shortly to confirm.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <CalendarPlus className="h-4 w-4" />
                        Book Appointment
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setForm(initial); setStatus('idle'); setErrorMsg(''); }}
                    className="btn-outline"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </span>
      {children}
    </label>
  );
}
