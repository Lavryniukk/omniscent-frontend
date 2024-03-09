export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className=" animate-pulse bg-muted-foreground h-full w-full blur-[20px]" />
    </div>
  );
}
