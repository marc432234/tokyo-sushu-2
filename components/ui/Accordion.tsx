"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type AccordionGroupContextValue = {
  openValue: string | null;
  onToggle: (value: string) => void;
};

const AccordionGroupContext = createContext<AccordionGroupContextValue | null>(null);

type AccordionGroupProps = {
  children: ReactNode;
  defaultValue?: string | null;
};

export function AccordionGroup({
  children,
  defaultValue = null,
}: AccordionGroupProps) {
  const [openValue, setOpenValue] = useState<string | null>(defaultValue);

  const value = useMemo(
    () => ({
      openValue,
      onToggle: (nextValue: string) => {
        setOpenValue((currentValue) => (currentValue === nextValue ? null : nextValue));
      },
    }),
    [openValue],
  );

  return <AccordionGroupContext.Provider value={value}>{children}</AccordionGroupContext.Provider>;
}

type AccordionItemProps = {
  value?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({
  value,
  title,
  kicker,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const group = useContext(AccordionGroupContext);
  const [open, setOpen] = useState(defaultOpen);
  const isGrouped = Boolean(group && value);
  const isOpen = isGrouped ? group?.openValue === value : open;

  return (
    <div className="accordion-row">
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={isOpen}
        onClick={() => {
          if (group && value) {
            group.onToggle(value);
            return;
          }

          setOpen((currentValue) => !currentValue);
        }}
      >
        <div className="min-w-0">
          {kicker ? (
            <p className="mb-1 text-[0.68rem] uppercase tracking-[0.24em] text-(--accent-gold)">
              {kicker}
            </p>
          ) : null}
          <span className="text-lg font-semibold text-stone-100 sm:text-xl">{title}</span>
        </div>
        <span
          className={`accordion-chevron ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        className="accordion-body"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
