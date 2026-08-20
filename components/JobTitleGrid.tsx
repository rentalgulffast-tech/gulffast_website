interface JobTitleGridProps {
  jobTitles: string[];
}

export default function JobTitleGrid({ jobTitles }: JobTitleGridProps) {
  return (
    <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#12233B] mb-4 border-l-4 border-[#2B6CB0] pl-3">
        Job Titles We Supply
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
        {jobTitles.map((title) => (
          <li key={title} className="flex items-start gap-2 bg-[#EAF4FC] p-3 rounded-xl border border-[#D7E6F5]">
            <span className="text-[#2B6CB0] font-bold">✓</span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
