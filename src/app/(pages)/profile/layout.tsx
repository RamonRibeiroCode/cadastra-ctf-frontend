import Image from "next/image";
import InfoBlock from "../../components/ui/InfoBlock";
import ProfileLinks from "../../components/ProfileLinks";
import ProfileContentWrapper from "../../components/ProfileContentWrapper";

export default function Profile({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-7 w-full mx-auto max-w-7xl">
      <div className="w-full bg-primary-default rounded-lg p-[30px] pb-0 mb-8">
        <div className="flex">
          <div className="relative mr-6">
            <Image
              className="rounded-md"
              width={160}
              height={160}
              src="https://assets.hackingclub.com/user/avatar/64ff03c8cd855"
              alt=""
            />

            <div className="flex justify-center items-center w-5 h-5 bg-white rounded-full absolute left-full bottom-7 -translate-x-1/2">
              <div className="w-3 h-3 bg-[#0bb783] rounded-full" />
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold text-neutral-gray-secondary">
              RAMON RAMOS EXT
            </h1>

            <div className="flex space-x-5 mt-3">
              <InfoBlock extraClasses="flex flex-col">
                <span className="block text-xl font-semibold ml-1 text-white">
                  0
                </span>

                <span className="block text-sm text-neutral-gray-quaternary  mt-auto">
                  Level
                </span>
              </InfoBlock>

              <InfoBlock>
                <span className="block text-xl font-semibold ml-1 text-white">
                  0
                </span>

                <div>
                  <span className="text-sm text-neutral-gray-quaternary">
                    XP
                  </span>
                  <span className="text-xs text-neutral-gray-senary mt-auto">
                    {" "}
                    - Experience
                  </span>
                </div>
              </InfoBlock>

              <div className="flex flex-col justify-end">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-neutral-gray-quaternary leading-5">
                    Rumo ao próximo nivel
                  </span>
                  <span className="text-sm font-semibold text-white leading-5">
                    0%
                  </span>
                </div>

                <div className="w-[300px] h-1.5 rounded-md bg-[rgba(255,255,255,0.1)] mb-1">
                  <div
                    className="h-full bg-white rounded-md"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProfileLinks />
      </div>

      <ProfileContentWrapper>{children}</ProfileContentWrapper>
    </div>
  );
}
