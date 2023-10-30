import DiscoverInput from "./components/DiscoverInput/DiscoverInput";

export default function DiscoverChat() {
  return (
    <div className="w-8/12 mx-auto border min-h-[80vh] h-full border-accent rounded-3xl relative overflow-hidden">
      <div className="w-full absolute h-[50px] bg-secondary-900" />
      <DiscoverInput />
    </div>
  );
}
