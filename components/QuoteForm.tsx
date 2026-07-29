'use client';

import { useState } from 'react';

interface QuoteFormProps {
  defaultCategory?: string;
  serviceType?: 'equipment' | 'vehicle' | 'manpower' | 'general';
}

export default function QuoteForm({ defaultCategory = '', serviceType = 'general' }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    cityLocation: 'Al Khobar',
    serviceDivision: serviceType === 'general' ? 'equipment' : serviceType,
    itemName: defaultCategory,
    duration: 'Monthly Contract',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-blue-200 rounded-lg p-8 text-center text-slate-900 shadow-sm">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Submitted!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Thank you, <strong>{formData.fullName}</strong>. Our industrial sales desk in Al Khobar will review your requirement for <strong>{formData.itemName || 'your project'}</strong> and send an official quote within 2 business hours.
        </p>
        <div className="bg-slate-50 p-4 rounded-md text-xs text-slate-600 border border-slate-200 space-y-1 mb-6">
          <p><strong>Hotlines:</strong> +966 56 867 6710 | +966 53 832 1732</p>
          <p><strong>Sales Desk Email:</strong> sales@gulffast.co</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ ...formData, projectDetails: '' });
          }}
          className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-blue-900 font-semibold rounded-md text-xs transition-colors border border-slate-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 text-slate-900 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Request Direct Quote</h3>
          <p className="text-xs text-slate-500 mt-0.5">GulfFast Al Khobar Direct Supplier Desk • Fast Response</p>
        </div>
        <span className="bg-blue-50 text-blue-900 border border-blue-200 text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
          KSA Direct
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Eng. Abdullah Al-Mansoor"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">Company / Contractor Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Al-Khobar Contracting LLC"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">Work Email Address *</label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">Mobile / WhatsApp (+966) *</label>
          <input
            type="tel"
            required
            placeholder="+966 5X XXX XXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">Service Division</label>
          <select
            value={formData.serviceDivision}
            onChange={(e) => setFormData({ ...formData, serviceDivision: e.target.value as any })}
            className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <option value="equipment">Equipment Rental Division</option>
            <option value="vehicle">Vehicle Rental Division</option>
            <option value="manpower">Manpower Supply Division</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">Target Project City / Site</label>
          <select
            value={formData.cityLocation}
            onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <option value="Al Khobar">Al Khobar (Headquarters)</option>
            <option value="Dammam">Dammam</option>
            <option value="Jubail">Jubail Industrial City</option>
            <option value="Ras Tanura">Ras Tanura</option>
            <option value="Riyadh">Riyadh Region</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Yanbu">Yanbu</option>
            <option value="NEOM">NEOM / Tabuk</option>
            <option value="Jizan">Jizan</option>
            <option value="Other KSA Site">Other KSA Site Location</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-slate-700 font-semibold mb-1 text-xs">Required Category / Machinery / Trade Title</label>
        <input
          type="text"
          placeholder="e.g. 50T Mobile Crane / 6G Welders / 400 kVA Generator"
          value={formData.itemName}
          onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 text-xs"
        />
      </div>

      <div className="mt-4">
        <label className="block text-slate-700 font-semibold mb-1 text-xs">Project Scope &amp; Special Requirements</label>
        <textarea
          rows={3}
          placeholder="Specify quantity required, duration, gate pass requirements (Aramco/SABIC), and start date..."
          value={formData.projectDetails}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 text-xs"
        ></textarea>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-slate-500">
          🔒 Direct quote from equipment owner. No middleman broker fee.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto px-8 py-3 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
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
    </form>
  );
}
