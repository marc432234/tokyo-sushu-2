"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mt-(--header-offset) flex min-h-[calc(100dvh-var(--header-offset))] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow mb-6">Something went wrong</span>
      <h1 className="font-(family-name:--font-display) text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-[-0.04em]">
        This page needs a reset.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-400">
        A minor hiccup in the kitchen. Give it another try.
      </p>
      <button onClick={reset} className="btn-primary mt-8">
        Try Again
      </button>
    </div>
  );
}
