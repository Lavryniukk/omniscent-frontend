import { ProfileModule } from "@/app/modules";

export default function Profile({ params }: { params: { id: string } }) {
  return (
    <>
      <ProfileModule id={params.id} />
    </>
  );
}
