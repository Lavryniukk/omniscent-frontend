export default function Skeleton({ className }: { className?: string }) {
  return (
    <span className={`rounded-lg block overflow-hidden ${className}`}>
      <span className=" animate-pulse block bg-muted-foreground h-full w-full blur-[20px]" />
    </span>
  );
}
