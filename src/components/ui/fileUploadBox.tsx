import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";

interface FileUploadBoxProps {
  title?: string
  onFileSelect: (file: File | null) => void;
}

export default function FileUploadBox({ title, onFileSelect }: FileUploadBoxProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setPreview(URL.createObjectURL(selected));
      onFileSelect(selected);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onFileSelect(null); // clear parent state too if needed
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-lg font-medium">{ title ? title : "Attach Photo Evidence"}</label>

      <div
        className={`relative w-full h-54 rounded-xl overflow-hidden flex flex-col items-center justify-center ${
          preview
            ? "bg-cover bg-center"
            : "border-2 border-dashed text-gray-500"
        }`}
        style={preview ? { backgroundImage: `url(${preview})` } : {}}
      >
        {!preview && (
          <div className="flex flex-col items-center text-center px-8">
            <ImageIcon
              size={36}
              className="mb-2 dark text-primary"
              color="currentColor"
            />
            <p>Drag & Drop image here</p>
            <p className="text-xs">
              Format must be PNG, JPEG or JPG and less than 5mb
            </p>
          </div>
        )}

        {/* Always show file input */}
        <label
          className={`${
            preview
              ? "absolute pt-20 inset-0 flex items-center justify-center bg-black/40 text-white underline cursor-pointer text-sm"
              : "text-SB underline cursor-pointer mt-2"
          }`}
        >
          {preview ? "Replace Image" : "Browse File"}
          <input
            type="file"
            accept="image/png,image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Close button only if image exists */}
        {preview && (
          <button
            onClick={handleRemove}
            type="button"
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

// export function FileUploadBoxSmall({ onFileSelect }: FileUploadBoxProps) {
//   const [preview, setPreview] = useState<string | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const selected = e.target.files[0];
//       setPreview(URL.createObjectURL(selected));
//       onFileSelect(selected);
//     }
//   };

//   const handleRemove = () => {
//     setPreview(null);
//     onFileSelect(null);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       {/* Whole box clickable */}
//       <label
//         className={`relative w-full h-28 rounded-xl overflow-hidden flex flex-col items-center justify-center border-2 border-dashed cursor-pointer ${
//           preview ? "border-none" : "border-gray-500"
//         }`}
//       >
//         {/* Show preview if exists */}
//         {preview ? (
//           <img
//             src={preview}
//             alt="Preview"
//             className="inset-0 w-full h-full object-cover"
//           />
//         ) : (
//           <div className="flex flex-col items-center text-center px-8">
//             <ImageIcon size={24} className="mb-2 text-primary" />
//             <p>Click to upload</p>
//           </div>
//         )}

//         {/* Hidden input */}
//         <input
//           type="file"
//           accept="image/png, image/jpeg"
//           className="hidden"
//           onChange={handleFileChange}
//         />

//         {/* Remove button only if preview exists */}
//         {preview && (
//           <button
//             type="button"
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation(); // don’t reopen file picker
//               handleRemove();
//             }}
//             className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
//           >
//             <X size={16} />
//           </button>
//         )}
//       </label>
//     </div>
//   );
// }

type FileUploadBoxSmallProps = {
  onFileSelect: (file: File) => void;
  onRemove: () => void;
  file?: File | null;
};

export function FileUploadBoxSmall({ onFileSelect, onRemove, file }: FileUploadBoxSmallProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <label className="relative cursor-pointer w-32 h-28 border border-dashed rounded-lg flex items-center justify-center bg-gray-50 overflow-hidden">
      {file ? (
        <>
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemove(); // tell parent to remove this box completely
            }}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
          >
            <X size={16} />
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center text-center px-2">
          <ImageIcon size={24} className="mb-2 text-grey" />
          <p className="text-gray">Click to upload</p>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </label>
  );
}
