import ProfilePage from "@/app/modules/Profile/Profile";

export default function Profile({ params }: { params: { id: string } }) {
  return (
    <>
      <ProfilePage id={params.id} />
    </>
  );
}
