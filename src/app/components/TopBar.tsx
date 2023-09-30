import Image from "next/image";

export default function TopBar() {
  return (
    <div className="flex w-full h-16 bg-primary-default px-7 justify-end items-center">
      <Image
        className="rounded-md"
        width={40}
        height={40}
        src="https://assets.hackingclub.com/user/avatar/64ff03c8cd855"
        alt=""
      />
    </div>
  );
}
