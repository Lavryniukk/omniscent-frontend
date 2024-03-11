export default function Skeleton({
  width,
  height,
  noMargin = false,
}: {
  width: string;
  height: string;
  noMargin?: boolean;
}) {
  return (
    <div
      style={{ width: width, height: height }}
      className={`${noMargin ? "" : "mx-auto"} rounded-lg overflow-hidden`}
    >
      <div className=" animate-pulse bg-muted-foreground h-full w-full blur-[20px]" />
    </div>
  );
}
