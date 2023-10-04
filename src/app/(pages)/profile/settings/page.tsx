import Image from "next/image";
import PencilFill from "../../../icons/PencilFill";
import ProfileInput from "../../../components/ui/ProfileInput";

export default function ProfileSettings() {
  return (
    <div className="w-full bg-primary-default rounded-lg">
      <form className="p-[30px]">
        <div className="flex pt-3 pb-6">
          <span className="text-white text-sm w-1/3">Avatar</span>
          <div className="w-2/3">
            <div>
              <div className="relative w-fit">
                <Image
                  className="rounded-md"
                  width={125}
                  height={125}
                  src="https://assets.hackingclub.com/user/avatar/64ff03c8cd855"
                  alt=""
                />

                <button className="absolute -right-4 -top-4 w-[25px] h-[25px] flex justify-center items-center bg-white rounded-full text-[#565674] hover:text-[#3699ff]">
                  <PencilFill />
                </button>
              </div>

              <span className="block text-xs text-neutral-gray-tertiary mt-3">
                Allowed file types: png, jpg, jpeg.
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-3 pb-6">
          <span className="text-white text-sm w-1/3">
            Full Name <span className="text-[#f64e60]">*</span>
          </span>
          <div className="w-2/3">
            <ProfileInput
              placeholder="First name"
              errorMessage="O seu nome é um campo obrigatório"
            />
          </div>
        </div>

        <div className="flex items-center pt-3 pb-6">
          <span className="text-white text-sm w-1/3">
            Nick <span className="text-[#f64e60]">*</span>
          </span>
          <div className="w-2/3">
            <ProfileInput
              placeholder="Nickname"
              // errorMessage="O seu nick é um campo obrigatório"
            />
          </div>
        </div>

        <div className="flex items-center pt-3 pb-6">
          <span className="text-white text-sm w-1/3">
            Bio <span className="text-[#f64e60]">*</span>
          </span>
          <div className="w-2/3">
            <ProfileInput placeholder="Bio" />
          </div>
        </div>

        <div className="flex items-center pt-3 pb-6">
          <span className="text-white text-sm w-1/3">
            Country <span className="text-[#f64e60]">*</span>
          </span>
          <div className="w-2/3">
            <ProfileInput placeholder="Country" />
          </div>
        </div>
      </form>

      <div className="flex justify-end items-center h-[70px] border-t border-[#2b2b40] px-[30px]">
        <button className="flex justify-center items-center w-[168px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] text-sm font-medium text-white">
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}
