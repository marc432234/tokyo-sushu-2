export default function Loading() {
  return (
    <div className="mt-(--header-offset) flex min-h-[calc(100dvh-var(--header-offset))] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-(--accent-gold) border-t-transparent" />
    </div>
  );
}
