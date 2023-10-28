export default function ProjectContainer({
  title,
}: {
  title: string | React.ReactNode;
}) {
  return (
    <div className="py-5 border border-secondary rounded-lg text-lg text-center text-accent px-3">
      {title}
    </div>
  );
}
