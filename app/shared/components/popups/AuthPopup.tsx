import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";

export default function AuthPopup({ isOpen }: { isOpen: boolean }) {
  // const { isPopupOpen } = usePopupStore();
  const popup: React.JSX.Element | null = isOpen ? (
    <div
      className={`w-screen flex overflow-hidden absolute left-0 top-0 h-screen items-center z-50 justify-center bg-background`}
    >
      <div className="w-full lg:w-1/2 space-y-10 text-3xl text-center text-text font-semibold">
        <h1>Your session has expired, you will have to login again</h1>
        <PrimaryBtn
          text="Login"
          href="/api/auth/login"
          width={"200px"}
          classname="text-lg"
          height={"40px"}
        />
      </div>
    </div>
  ) : null;
  return popup;
}
