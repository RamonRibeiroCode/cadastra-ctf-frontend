export default function ProfileOverview() {
  return (
    <div className="w-full bg-primary-default rounded-lg p-[30px] space-y-6">
      <div className="flex">
        <span className="w-1/3 font-medium text-neutral-gray-tertiary text-[13px]">
          Full Name
        </span>

        <span className="w-2/3 text-white font-medium text-sm">
          RAMON RAMOS EXT
        </span>
      </div>

      <div className="flex">
        <span className="w-1/3 font-medium text-neutral-gray-tertiary text-[13px]">
          E-mail
        </span>

        <span className="w-2/3 text-white font-medium text-sm">
          ramon_ramos_ext@carrefour.com
        </span>
      </div>

      <div className="flex">
        <span className="w-1/3 font-medium text-neutral-gray-tertiary text-[13px]">
          Country
        </span>

        <span className="w-2/3 text-white font-medium text-sm">BR</span>
      </div>

      <div className="flex py-5">
        <span className="w-1/3 font-medium text-neutral-gray-tertiary text-[13px]">
          Username/Nick
        </span>

        <span className="w-2/3 text-white font-medium text-sm">
          ramon_ramos_ext
        </span>
      </div>
    </div>
  );
}
