import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-(--header-offset) flex min-h-[calc(100dvh-var(--header-offset))] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow mb-6">404</span>
      <h1 className="font-(family-name:--font-display) text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
        Not found
      </h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-400">
        The page you&apos;re looking for doesn&apos;t exist — but the sushi is still here.
      </p>
      <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/menu" className="btn-secondary">
          Explore the Menu
        </Link>
      </div>
    </div>
  );
}
