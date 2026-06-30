"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Section = {
  title: string;
  body: string;
  list?: string[];
};

export default function FaqAccordion({ sections }: { sections: Section[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <ul className="border-t border-ink/15">
      {sections.map((s, i) => {
        const open = openIdx === i;
        return (
          <li key={i} className="border-b border-ink/15">
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-kom"
            >
              <span className="font-display text-xl sm:text-2xl">{s.title}</span>
              {open ? <Minus className="h-5 w-5 flex-shrink-0" /> : <Plus className="h-5 w-5 flex-shrink-0" />}
            </button>
            {open && (
              <div className="grid gap-4 pb-8 pr-10 text-base leading-relaxed text-ink-soft">
                {s.body && <p className="whitespace-pre-line">{s.body}</p>}
                {s.list && (
                  <ul className="space-y-2 pl-4">
                    {s.list.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-kom">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
