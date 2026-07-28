interface AeoAnswerBlockProps {
  summary: string;
  categoryName: string;
}

export default function AeoAnswerBlock({ summary, categoryName }: AeoAnswerBlockProps) {
  return (
    <div className="my-6 bg-gradient-to-r from-amber-50 to-slate-50 dark:from-slate-900 dark:to-slate-900/80 border-l-4 border-amber-500 rounded-r-xl p-5 sm:p-6 shadow-sm border border-slate-200/80 dark:border-slate-800">
      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black">
          AI
        </span>
        <span>Executive Summary — {categoryName} Saudi Arabia</span>
      </div>
      <p className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-medium leading-relaxed">
        {summary}
      </p>
    </div>
  );
}
