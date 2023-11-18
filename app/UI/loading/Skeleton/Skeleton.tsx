export default function Skeleton({
  width,
  height,
  rounded,
  noMargin = false,
}: {
  width: string;
  height: string;
  rounded?: string;
  noMargin?: boolean;
}) {
  return (
    <div
      style={{ width: width, height: height, borderRadius: rounded }}
      className={`${noMargin ? "" : "mx-auto"} bg-secondary overflow-hidden`}
    >
      <div className="animate-skeleton h-full w-full blur-[20px]" />
    </div>
  );
}
