export default function ProjectContainer({ title }: { title: string }) {
  return (
    <div className="py-5 border border-secondary rounded-lg text-lg text-center text-accent pl-3">
      {title}
    </div>
  );
}
