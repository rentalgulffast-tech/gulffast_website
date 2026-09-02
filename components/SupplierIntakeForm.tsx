'use client';

import { useState } from 'react';
import { getEquipmentCategories } from '@/lib/equipment';
import { cities } from '@/lib/cities';
import { CONTACT } from '@/lib/contact';
import { trackEvent } from '@/lib/analytics';

export default function SupplierIntakeForm() {
  const equipmentCategories = getEquipmentCategories();

  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [brandModel, setBrandModel] = useState('');
  const [quantity, setQuantity] = useState('');
  const [capacity, setCapacity] = useState('');
  const [monthlyRate, setMonthlyRate] = useState('');
  const [withOperator, setWithOperator] = useState('');
  const [city, setCity] = useState('Al Khobar');
  const [details, setDetails] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'supplier',
          company,
          contactName,
          phone,
          email: email || undefined,
          category,
          brandModel: brandModel || undefined,
          quantity,
          capacity: capacity || undefined,
          monthlyRate: monthlyRate || undefined,
          withOperator,
          city,
          details: details || undefined
        })
      });

      const data: { ok: boolean; error?: string } = await res.json();

      if (!res.ok || !data.ok) {
        setSubmitError(data.error || `We could not send your submission. Please call ${CONTACT.phonePrimary} directly.`);
        return;
      }

      trackEvent('generate_lead', { form: 'supplier_registration', category });
      setSubmitted(true);
    } catch {
      setSubmitError(`We could not reach our server. Please call ${CONTACT.phonePrimary} or WhatsApp us directly.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-2xl p-8 text-center text-foreground shadow-sm">
        <div className="w-14 h-14 bg-accent-strong/10 text-accent-strong rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-strong/20">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Submission Received!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-2 leading-relaxed">
          Thank you, <strong>{contactName}</strong>. Our fleet sourcing desk will review your equipment listing and get in touch.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 bg-background hover:bg-border text-primary font-semibold rounded-xl text-xs transition-colors border border-border"
        >
          Submit Another Listing
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 text-foreground shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-primary font-bold mb-1">Company Name *</label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">Contact Name *</label>
            <input
              type="text"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">Phone (+966) *</label>
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
            <label className="block text-primary font-bold mb-1">Email (Optional)</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">Equipment Category *</label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-bold"
            >
              <option value="">Select equipment category…</option>
              {equipmentCategories.map((cat) => (
                <option key={cat.slug} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">Brand / Model (Optional)</label>
            <input
              type="text"
              placeholder="e.g. CAT 320D"
              value={brandModel}
              onChange={(e) => setBrandModel(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">How many units? *</label>
            <input
              type="number"
              min="1"
              required
              placeholder="e.g. 3"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">Capacity / Rating (Optional)</label>
            <input
              type="text"
              placeholder="e.g. 20 ton, 250 kVA, 750 CFM"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">Monthly Rate, SAR (Optional)</label>
            <input
              type="text"
              placeholder="e.g. 12,000 per month"
              value={monthlyRate}
              onChange={(e) => setMonthlyRate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />
            <p className="text-[10px] text-muted mt-1 leading-relaxed">
              Leave blank if you would rather discuss rates directly.
            </p>
          </div>

          <div>
            <label className="block text-primary font-bold mb-1">Supplied With *</label>
            <select
              required
              value={withOperator}
              onChange={(e) => setWithOperator(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-bold"
            >
              <option value="">Select…</option>
              <option value="With operator">With operator</option>
              <option value="Without operator (bare rental)">Without operator (bare rental)</option>
              <option value="Either — with or without operator">Either — with or without operator</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-primary font-bold mb-1">City / Region *</label>
            <select
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-bold"
            >
              {cities.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
              <option value="Other KSA Site">Other KSA Site Location</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-primary font-bold mb-1">Additional Details (Optional)</label>
            <textarea
              rows={3}
              placeholder="Year, condition, quantity, availability…"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium resize-none"
            />
          </div>
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-xs leading-relaxed">
            <strong className="block mb-1">Your submission could not be sent.</strong>
            {submitError}
          </div>
        )}

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary hover:bg-accent-strong text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
          >
            {submitting ? 'Submitting…' : 'Submit Equipment Listing →'}
          </button>
        </div>
      </form>
    </div>
  );
}
