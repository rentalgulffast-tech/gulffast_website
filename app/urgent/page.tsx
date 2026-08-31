import Link from 'next/link';
import { getEquipmentTier1Categories } from '@/lib/equipment';
import { getManpowerTier1Categories } from '@/lib/manpower';
import { CONTACT, telHref } from '@/lib/contact';
import { generateServiceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Urgent Equipment & Manpower Available — Eastern Province | GulfFast',
  description:
    'Urgent equipment and manpower requirements in Al Khobar, Dammam, Dhahran and Jubail. Tell us what you need and we will tell you what can move. Call or WhatsApp GulfFast.',
  alternates: { canonical: '/urgent' }
};

const EASTERN_CITIES = ['Al Khobar', 'Dammam', 'Dhahran', 'Jubail'];

const WHAT_TO_SEND = [
  'What you need — equipment category, or trade and how many',
  'Where the site is, and whether it is inside a controlled facility',
  'When you need it on site',
  'How long for — days, weeks or months',
  'Any certification the client contract specifies'
];

const FAQS = [
  {
    question: 'How quickly can you actually mobilize?',
    answer:
      'It depends on what you need and where. Equipment we own outright and hold in Al Khobar can move within the Eastern Province quickly; a specific certified trade may take longer to place properly. Call and we will tell you what is realistic rather than what sounds good on a website.'
  },
  {
    question: 'Do you charge more for urgent mobilization?',
    answer:
      'Short-notice work sometimes carries a premium, usually for out-of-hours transport or overtime rather than for the machine itself. Any premium is stated in the quote before you commit, not added afterwards.'
  },
  {
    question: 'Can you cover a crew that did not turn up?',
    answer:
      'That is one of the more common urgent calls we get. Tell us the trade, the number and the site, and we will tell you what we can place and when.'
  },
  {
    question: 'Which areas can you reach at short notice?',
    answer:
      'Al Khobar, Dammam, Dhahran and Jubail are within short dispatch range of our operations hub. Riyadh, Jeddah and Yanbu are served, but not at the same speed — we will say so rather than let you find out.'
  }
];

export default function UrgentPage() {
  const ownedEquipment = getEquipmentTier1Categories()
    .filter((c) => c.ownedFleetCount > 0)
    .sort((a, b) => b.ownedFleetCount - a.ownedFleetCount);
  const totalOwned = ownedEquipment.reduce((sum, c) => sum + c.ownedFleetCount, 0);
  const trades = getManpowerTier1Categories();

  const schema = generateServiceSchema(
    'Urgent Equipment and Manpower Supply — Eastern Province',
    'Short-notice equipment and manpower mobilization across the Eastern Province of Saudi Arabia.',
    '/urgent'
  );

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Urgent Requirements', url: '/urgent' }]} />

        <CategoryHero
          badgeText="Urgent Requirements — Eastern Province"
          h1="Urgent Equipment and Manpower Requirements"
          intro="Breakdowns, unplanned shutdowns and crews that did not arrive do not wait for a quotation cycle. Tell us what you need, where, and when — and we will tell you honestly what can move and what cannot."
          ctaLabel="Send an urgent enquiry"
          ctaHref="#urgent-form"
        />

        {/* Direct contact — the fastest route, above everything else */}
        <div className="bg-primary-deep text-white rounded-2xl p-6 sm:p-8 my-8">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[0.16em]">Fastest route</p>
          <h2 className="text-xl sm:text-2xl font-extrabold mt-1">Call or WhatsApp — do not wait for email</h2>
          <p className="text-white/70 text-xs mt-2 max-w-2xl leading-relaxed">
            For anything genuinely urgent, phone or WhatsApp reaches us faster than a form. We answer urgent
            enquiries the same working day.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm transition-colors"
            >
              WhatsApp {CONTACT.phonePrimary}
            </a>
            <a
              href={telHref(CONTACT.phonePrimary)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong hover:bg-accent text-white font-bold text-sm transition-colors"
            >
              Call {CONTACT.phonePrimary}
            </a>
            <a
              href={telHref(CONTACT.phoneSecondary)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors"
            >
              Call {CONTACT.phoneSecondary}
            </a>
          </div>
          <p className="text-white/50 text-[11px] mt-4">
            {`Dispatching to ${EASTERN_CITIES.join(', ')} and across the Eastern Province from our Al Khobar operations hub.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          <div className="lg:col-span-7 space-y-8">
            <section>
              <h2 className="text-xl font-extrabold text-primary mb-2 border-l-4 border-accent pl-3">
                Why we can move quickly in the Eastern Province
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {`Short-notice supply is a geography problem before it is anything else. Our operations hub is in Al Khobar, which puts Dammam, Dhahran and Jubail within short dispatch range, and we own ${totalOwned} units outright across ${ownedEquipment.length} categories — so for those we are not phoning another yard and waiting for their answer before we can give you ours.`}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-primary mb-3 border-l-4 border-accent pl-3">
                Equipment we own and dispatch directly
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ownedEquipment.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/equipment/${cat.slug}`}
                    className="flex items-center gap-3 bg-card-background border border-border rounded-xl px-4 py-3 hover:border-primary/30 transition-colors"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-accent-strong/10 border border-accent-strong/20 text-accent-strong flex items-center justify-center text-sm font-black">
                      {cat.ownedFleetCount}
                    </span>
                    <span className="text-xs font-bold text-primary leading-snug">{cat.name}</span>
                  </Link>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                Other categories are supplied as well — these are the ones held in our own fleet, which is why
                they move fastest.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-primary mb-3 border-l-4 border-accent pl-3">
                Trades we place at short notice
              </h2>
              <div className="flex flex-wrap gap-2">
                {trades.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/manpower/${cat.slug}`}
                    className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {cat.name} →
                  </Link>
                ))}
              </div>
            </section>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-extrabold text-primary mb-1">
                Send these five things and we can answer immediately
              </h2>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Most urgent enquiries take two extra rounds of messages because something below was missing.
              </p>
              <ol className="space-y-2.5">
                {WHAT_TO_SEND.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-tint text-primary flex items-center justify-center text-[10px] font-black">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <FaqAccordion faqs={FAQS} title="Urgent supply — straight answers" injectSchema={false} />
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28" id="urgent-form">
              <QuoteForm serviceType="general" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
