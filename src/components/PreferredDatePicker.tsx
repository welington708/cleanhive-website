"use client";

import { useEffect, useId, useRef, useState } from "react";

const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" });
const fullDateFormatter = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" });
const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toAmericanDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}/${date.getFullYear()}`;
}

export function PreferredDatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(new Date()));
  const wrapperRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    const form = wrapperRef.current?.closest("form");
    function clearOnReset() {
      setSelectedDate(null);
      setViewMonth(startOfMonth(new Date()));
      setIsOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    form?.addEventListener("reset", clearOnReset);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      form?.removeEventListener("reset", clearOnReset);
    };
  }, []);

  const firstWeekday = viewMonth.getDay();
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: firstWeekday + daysInMonth }, (_, index) => {
    if (index < firstWeekday) return null;
    return new Date(viewMonth.getFullYear(), viewMonth.getMonth(), index - firstWeekday + 1);
  });
  const currentMonth = startOfMonth(today);
  const canGoBack = viewMonth.getTime() > currentMonth.getTime();

  function selectDate(date: Date) {
    setSelectedDate(date);
    setIsOpen(false);
  }

  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      <span id={labelId}>Preferred Cleaning Date <span className="font-normal text-slate-500">(optional)</span></span>
      <div ref={wrapperRef} className="relative">
        <input name="preferredDate" type="hidden" value={selectedDate ? toIsoDate(selectedDate) : ""} />
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-labelledby={labelId}
          onClick={() => setIsOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsOpen(false);
          }}
          className="form-control flex items-center justify-between gap-3 text-left transition-colors hover:border-brand/60"
        >
          <span className={selectedDate ? "text-ink" : "text-slate-500"}>{selectedDate ? toAmericanDate(selectedDate) : "MM/DD/YYYY"}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2v4M18 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          </svg>
        </button>

        {isOpen && (
          <div role="dialog" aria-label="Choose a preferred cleaning date" className="absolute left-0 z-30 mt-2 w-full min-w-[18rem] max-w-[22rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                disabled={!canGoBack}
                onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1))}
                className="grid h-9 w-9 place-items-center rounded-full text-brand transition-colors hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <p className="text-base font-bold text-ink">{monthFormatter.format(viewMonth)}</p>
              <button
                type="button"
                aria-label="Next month"
                onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))}
                className="grid h-9 w-9 place-items-center rounded-full text-brand transition-colors hover:bg-brand/10"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {weekdays.map((day) => <span key={day} className="py-1 text-[.7rem] font-bold uppercase tracking-wide text-slate-400">{day}</span>)}
              {days.map((date, index) => {
                if (!date) return <span key={`empty-${index}`} />;
                const isoDate = toIsoDate(date);
                const isSelected = selectedDate ? isoDate === toIsoDate(selectedDate) : false;
                const isToday = isoDate === toIsoDate(today);
                const isPast = date.getTime() < today.getTime();
                return (
                  <button
                    key={isoDate}
                    type="button"
                    disabled={isPast}
                    aria-label={fullDateFormatter.format(date)}
                    aria-pressed={isSelected}
                    onClick={() => selectDate(date)}
                    className={`aspect-square rounded-full text-sm font-semibold transition-colors ${isSelected ? "bg-gold text-ink shadow-sm" : isToday ? "ring-2 ring-brand text-brand" : "text-slate-700 hover:bg-brand/10 hover:text-brand"} disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="text-xs font-normal text-slate-500">Dates shown in U.S. format</span>
              {selectedDate && <button type="button" onClick={() => setSelectedDate(null)} className="text-xs font-bold text-brand hover:underline">Clear</button>}
            </div>
          </div>
        )}
      </div>
      <span className="font-normal text-xs text-slate-500">Choose the date that works best for you. We’ll confirm availability when we follow up.</span>
    </label>
  );
}
