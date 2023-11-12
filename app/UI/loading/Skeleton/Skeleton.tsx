export default function Skeleton({
  width,
  height,
  rounded,
}: {
  width: string;
  height: string;
  rounded?: string;
}) {
  return (
    <div
      style={{ width: width, height: height, borderRadius: rounded }}
      className={`mx-auto bg-secondary overflow-hidden`}
    >
      <div className="animate-skeleton h-full w-full blur-[20px]" />
    </div>
  );
}
