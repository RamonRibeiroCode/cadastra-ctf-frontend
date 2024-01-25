import Joystick from "@/icons/Joystick";
import People from "@/icons/People";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="p-8">
      <h1 className="text-[#3699ff] mb-6">Módulos</h1>

      <div className="flex space-x-6">
        <Link
          className="flex items-center bg-primary-default rounded-lg px-6 py-4 space-x-2 text-neutral-gray hover:bg-[#212e48] hover:text-[#3699ff]"
          href="/admin/users"
        >
          <People />
          <span>Users</span>
        </Link>
        <Link
          className="flex items-center bg-primary-default rounded-lg px-6 py-4 space-x-2 text-neutral-gray hover:bg-[#212e48] hover:text-[#3699ff]"
          href="/admin/challenges"
        >
          <Joystick />
          <span>Challenges</span>
        </Link>
      </div>
    </div>
  );
}
