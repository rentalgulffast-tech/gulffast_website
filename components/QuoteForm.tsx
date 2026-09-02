'use client';

import { useState } from 'react';
import { getEquipmentCategories } from '@/lib/equipment';
import { getManpowerCategories } from '@/lib/manpower';
import { cities } from '@/lib/cities';
import { CONTACT } from '@/lib/contact';
import { trackEvent } from '@/lib/analytics';

type NeedType = 'equipment' | 'manpower' | 'both';

interface QuoteFormProps {
  defaultCategory?: string;
  serviceType?: 'equipment' | 'manpower' | 'general';
  initialNeed?: NeedType;
}

const DURATION_OPTIONS = [
  'Immediate / Emergency Dispatch',
  'Within 1 Week',
  'Within 1 Month',
  'Ongoing / Long-Term Contract'
];

export default function QuoteForm({ defaultCategory = '', serviceType = 'general', initialNeed }: QuoteFormProps) {
  const equipmentCategories = getEquipmentCategories();
  const manpowerCategories = getManpowerCategories();

  const presetNeed: NeedType | undefined =
    serviceType === 'equipment' || serviceType === 'manpower' ? serviceType : initialNeed;

  const [step, setStep] = useState<1 | 2 | 3>(presetNeed ? 2 : 1);
  const [need, setNeed] = useState<NeedType | undefined>(presetNeed);
  const [equipmentCategory, setEquipmentCategory] = useState(serviceType === 'equipment' ? defaultCategory : '');
  const [manpowerCategory, setManpowerCategory] = useState(serviceType === 'manpower' ? defaultCategory : '');
  const [city, setCity] = useState('Al Khobar');
  const [duration, setDuration] = useState(DURATION_OPTIONS[1]);
  const [quantity, setQuantity] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const selectNeed = (value: NeedType) => {
    setNeed(value);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'quote',
          need,
          equipmentCategory: equipmentCategory || undefined,
          manpowerCategory: manpowerCategory || undefined,
          city,
          duration,
          quantity: quantity || undefined,
          fullName,
          companyName,
          phone,
          email: email || undefined
        })
      });

      const data: { ok: boolean; error?: string } = await res.json();

      if (!res.ok || !data.ok) {
        setSubmitError(data.error || `We could not send your request. Please call ${CONTACT.phonePrimary} directly.`);
        return;
      }

      trackEvent('generate_lead', { form: 'quote_request', need: need ?? 'unspecified', city });
      setSubmitted(true);
    } catch {
      setSubmitError(`We could not reach our server. Please call ${CONTACT.phonePrimary} or WhatsApp us directly.`);
    } finally {
      setSubmitting(false);
    }
  };

  const requestedItem = [equipmentCategory, manpowerCategory].filter(Boolean).join(' / ') || 'your project';

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-2xl p-8 text-center text-foreground shadow-sm">
        <div className="w-14 h-14 bg-accent-strong/10 text-accent-strong rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-strong/20">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Quote Request Submitted!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong>{fullName}</strong>. Our Al Khobar sales desk will review your requirement for <strong>{requestedItem}</strong> and send an official quote within 2 business hours.
        </p>

        {/* Numbered process graphic */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-slate-600 mb-6">
          <div className="bg-tint border border-border rounded-xl p-3">
            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-1.5 text-xs">1</div>
            Inquiry Received
          </div>
          <div className="bg-tint border border-border rounded-xl p-3">
            <div className="w-6 h-6 rounded-full bg-background text-primary border border-border flex items-center justify-center mx-auto mb-1.5 text-xs">2</div>
            Quotation Sent
          </div>
          <div className="bg-tint border border-border rounded-xl p-3">
            <div className="w-6 h-6 rounded-full bg-background text-primary border border-border flex items-center justify-center mx-auto mb-1.5 text-xs">3</div>
            Delivery / Mobilization
          </div>
        </div>

        <div className="bg-tint p-4 rounded-xl text-xs text-slate-600 border border-border space-y-1 mb-6">
          <p><strong>Hotlines:</strong> {CONTACT.phonePrimary} | {CONTACT.phoneSecondary}</p>
          <p><strong>Sales Desk Email:</strong> {CONTACT.email}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[var(--whatsapp-green)] hover:bg-[var(--whatsapp-green-dark)] text-white font-bold rounded-xl text-xs transition-colors inline-flex items-center justify-center gap-2"
          >
            Chat on WhatsApp Now →
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(presetNeed ? 2 : 1);
            }}
            className="px-6 py-2.5 bg-background hover:bg-border text-primary font-semibold rounded-xl text-xs transition-colors border border-border"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 text-foreground shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
        <div>
          <h3 className="text-xl font-extrabold text-primary">Request Direct Quote</h3>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">GulfFast Al Khobar Direct Supplier Desk • Fast Response</p>
        </div>
        <span className="bg-accent-strong/10 text-accent-strong border border-accent-strong/20 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Step {step} of 3
        </span>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`h-1.5 flex-1 rounded-full ${s <= step ? 'bg-primary' : 'bg-border'}`} />
        ))}
      </div>

      {/* Step 1: Select need */}
      {step === 1 && (
        <div className="space-y-3">
          <p className="text-xs font-bold text-primary mb-2">What do you need?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => selectNeed('equipment')}
              className="p-5 rounded-xl border-2 border-border hover:border-primary text-center transition-colors"
            >
              <span className="block text-2xl mb-2">🏗️</span>
              <span className="font-bold text-sm text-primary">Equipment</span>
            </button>
            <button
              type="button"
              onClick={() => selectNeed('manpower')}
              className="p-5 rounded-xl border-2 border-border hover:border-primary text-center transition-colors"
            >
              <span className="block text-2xl mb-2">👷</span>
              <span className="font-bold text-sm text-primary">Manpower</span>
            </button>
            <button
              type="button"
              onClick={() => selectNeed('both')}
              className="p-5 rounded-xl border-2 border-border hover:border-primary text-center transition-colors"
            >
              <span className="block text-2xl mb-2">🤝</span>
              <span className="font-bold text-sm text-primary">Both</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Specify details */}
      {step === 2 && (
        <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4">
          {(need === 'equipment' || need === 'both') && (
            <div>
              <label className="block text-primary font-bold mb-1 text-xs">Equipment Category *</label>
              <select
                required
                value={equipmentCategory}
                onChange={(e) => setEquipmentCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-xs font-medium"
              >
                <option value="">Select equipment category…</option>
                {equipmentCategories.map((cat) => (
                  <option key={cat.slug} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
          )}

          {(need === 'manpower' || need === 'both') && (
            <div>
              <label className="block text-primary font-bold mb-1 text-xs">Manpower Trade *</label>
              <select
                required
                value={manpowerCategory}
                onChange={(e) => setManpowerCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-xs font-medium"
              >
                <option value="">Select manpower trade…</option>
                {manpowerCategories.map((cat) => (
                  <option key={cat.slug} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-primary font-bold mb-1 text-xs">City / Site Location *</label>
              <select
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-xs font-bold"
              >
                {cities.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
                <option value="Other KSA Site">Other KSA Site Location</option>
              </select>
            </div>

            <div>
              <label className="block text-primary font-bold mb-1 text-xs">Duration / Urgency</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-xs font-bold"
              >
                {DURATION_OPTIONS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-primary font-bold mb-1 text-xs">Quantity (if relevant)</label>
            <input
              type="text"
              placeholder="e.g. 2 units / 5 workers"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-xs font-medium"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-bold text-slate-500 hover:text-primary"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-accent-strong text-white font-bold text-xs shadow-sm transition-all"
            >
              Continue →
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Contact details */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-primary font-bold mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Eng. Abdullah Al-Mansoor"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
              />
            </div>

            <div>
              <label className="block text-primary font-bold mb-1">Company / Contractor Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Al-Khobar Contracting LLC"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
              />
            </div>

            <div>
              <label className="block text-primary font-bold mb-1">Mobile / WhatsApp (+966) *</label>
              <input
                type="tel"
                required
                placeholder="+966 5X XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
              />
            </div>

            <div>
              <label className="block text-primary font-bold mb-1">Work Email Address (Optional)</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
              />
            </div>
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-xs leading-relaxed">
              <strong className="block mb-1">Your request could not be sent.</strong>
              {submitError}
            </div>
          )}

          <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs font-bold text-slate-500 hover:text-primary self-start sm:self-auto"
            >
              ← Back
            </button>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <p className="text-[11px] text-slate-500 font-medium order-2 sm:order-1">
                🔒 Direct quote from equipment owner. No middleman broker fee.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto order-1 sm:order-2 px-8 py-3 rounded-xl bg-primary hover:bg-accent-strong text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Quote Request →'
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
