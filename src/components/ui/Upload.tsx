import Image from "next/image";
import PencilFill from "@/icons/PencilFill";
import ImagePlaceholder from "@/icons/ImagePlaceholder";

interface UploadProps {
  handleImage: (file: FileList) => void;
  imagePreview: string;
  imageUrl: string;
}

export default function Upload({
  handleImage,
  imagePreview,
  imageUrl,
}: UploadProps) {
  const hasPreviewOrAvatarUrl = imageUrl || imagePreview;

  return (
    <>
      <div className="relative w-fit">
        {hasPreviewOrAvatarUrl ? (
          <Image
            className="rounded-md aspect-square object-contain"
            width={125}
            height={125}
            src={imagePreview ?? imageUrl}
            alt=""
          />
        ) : (
          <div className="flex items-center justify-center w-[125px] h-[125px] rounded-md border border-neutral-gray-senary border-dashed text-neutral-gray">
            <ImagePlaceholder width={45} height={45} />
          </div>
        )}

        <div>
          <label
            className="absolute -right-4 -top-4 w-[25px] h-[25px] cursor-pointer flex justify-center items-center bg-white rounded-full text-[#565674] hover:text-[#3699ff]"
            htmlFor="upload-photo"
          >
            <PencilFill />
          </label>

          <input
            className="absolute opacity-0 -z-10"
            type="file"
            name="photo"
            id="upload-photo"
            onChange={(e) => handleImage(e.target.files)}
          />
        </div>
      </div>

      <span className="block text-xs text-neutral-gray-tertiary mt-3">
        Allowed file types: png, jpg, jpeg.
      </span>

      <span className="block text-xs text-neutral-gray-tertiary mt-3">
        5MB maximum limit
      </span>
    </>
  );
}
