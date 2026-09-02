'use client';

import { useState } from 'react';
import { manpowerCategories } from '@/lib/manpower-categories';
import { CONTACT } from '@/lib/contact';
import { trackEvent } from '@/lib/analytics';

const MAX_CV_BYTES = 3 * 1024 * 1024;

const fieldClass =
  'w-full px-3.5 py-2.5 rounded-xl bg-tint border border-border text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary font-medium';

export default function CandidateRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [candidateName, setCandidateName] = useState('');

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const looksPdf =
      file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    if (!looksPdf) {
      setCvError('Your CV must be a PDF file.');
      e.target.value = '';
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setCvError('Your CV must be 3MB or smaller.');
      e.target.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cvError) return;

    setSubmitting(true);
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('fullName') || '');
    const trade = String(formData.get('jobCategory') || 'unspecified');

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: formData });
      const data: { ok: boolean; error?: string } = await res.json();

      if (!res.ok || !data.ok) {
        setSubmitError(
          data.error || `We could not send your application. Please call ${CONTACT.phonePrimary} directly.`
        );
        return;
      }

      setCandidateName(name);
      trackEvent('generate_lead', { form: 'candidate_registration', trade });
      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitError(
        `We could not reach our server. Please call ${CONTACT.phonePrimary} or WhatsApp us directly.`
      );
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
        <h3 className="text-xl font-bold text-primary mb-2">Application Received</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-2 leading-relaxed">
          Thank you{candidateName ? <>, <strong>{candidateName}</strong></> : null}. Our recruitment desk has your
          details and CV, and will contact you only about work opportunities that fit your trade and experience.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 bg-background hover:bg-border text-primary font-semibold rounded-xl text-xs transition-colors border border-border"
        >
          Register Another Candidate
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 text-foreground shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        {/* Honeypot — must stay empty. Hidden from users and assistive tech. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
          <label>
            Company website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label htmlFor="fullName" className="block text-primary font-bold mb-1">Full Name *</label>
            <input id="fullName" name="fullName" type="text" required maxLength={200} className={fieldClass} />
          </div>

          <div>
            <label htmlFor="jobCategory" className="block text-primary font-bold mb-1">Job Category *</label>
            <select id="jobCategory" name="jobCategory" required defaultValue="" className={`${fieldClass} font-bold`}>
              <option value="" disabled>Select job category…</option>
              {manpowerCategories.map((cat) => (
                <option key={cat.slug} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="nationality" className="block text-primary font-bold mb-1">Nationality *</label>
            <input id="nationality" name="nationality" type="text" required maxLength={100} className={fieldClass} />
          </div>

          <div>
            <label htmlFor="yearsExperience" className="block text-primary font-bold mb-1">Years of Experience *</label>
            <input
              id="yearsExperience"
              name="yearsExperience"
              type="number"
              required
              min={0}
              max={70}
              step={1}
              inputMode="numeric"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="currentLocation" className="block text-primary font-bold mb-1">Current Location *</label>
            <input
              id="currentLocation"
              name="currentLocation"
              type="text"
              required
              maxLength={200}
              placeholder="e.g. Dammam, KSA"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-primary font-bold mb-1">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+966 5X XXX XXXX"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-primary font-bold mb-1">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              placeholder="name@example.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="preferredSalary" className="block text-primary font-bold mb-1">
              Preferred Salary <span className="font-medium text-slate-500">(optional)</span>
            </label>
            <input
              id="preferredSalary"
              name="preferredSalary"
              type="text"
              maxLength={200}
              placeholder="e.g. SAR 4,500 / month"
              className={fieldClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="skills" className="block text-primary font-bold mb-1">
              Skills <span className="font-medium text-slate-500">(optional)</span>
            </label>
            <textarea
              id="skills"
              name="skills"
              rows={3}
              maxLength={2000}
              placeholder="Trades, equipment, software, languages…"
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="certifications" className="block text-primary font-bold mb-1">
              Certifications <span className="font-medium text-slate-500">(optional)</span>
            </label>
            <textarea
              id="certifications"
              name="certifications"
              rows={3}
              maxLength={2000}
              placeholder="e.g. WQT, TUV, Aramco approvals, NEBOSH, valid Saudi licence…"
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="cv" className="block text-primary font-bold mb-1">CV (PDF only, max 3MB) *</label>
            <input
              id="cv"
              name="cv"
              type="file"
              required
              accept="application/pdf,.pdf"
              onChange={handleCvChange}
              className="w-full text-xs text-slate-600 file:mr-3 file:px-4 file:py-2.5 file:rounded-xl file:border-0 file:bg-primary file:text-white file:font-bold file:text-xs hover:file:bg-accent-strong file:cursor-pointer bg-tint border border-border rounded-xl"
            />
            {cvError && <p className="text-red-700 font-semibold mt-1">{cvError}</p>}
          </div>
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-xs leading-relaxed">
            <strong className="block mb-1">Your application could not be sent.</strong>
            {submitError}
          </div>
        )}

        <p className="text-[11px] text-slate-500 leading-relaxed pt-2">
          By submitting, you consent to Gulf Fast Contracting Co. storing your information for recruitment purposes.
          We will contact you only about work opportunities.
        </p>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary hover:bg-accent-strong text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {submitting ? 'Submitting…' : 'Submit Application →'}
          </button>
        </div>
      </form>
    </div>
  );
}
