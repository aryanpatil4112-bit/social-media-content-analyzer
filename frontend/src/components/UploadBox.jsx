import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

function UploadBox({ selectedFile, setSelectedFile }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },

    multiple: false,

    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
      }
    },
  });

  return (
    <div className="mt-16">
      <div
        {...getRootProps()}
        className="
          border-2
          border-dashed
          border-cyan-500
          rounded-2xl
          p-16
          max-w-3xl
          mx-auto
          text-center
          cursor-pointer
          hover:border-cyan-300
          transition
        "
      >
        <input {...getInputProps()} />

        <FiUploadCloud className="mx-auto text-6xl text-cyan-400" />

        <h2 className="mt-5 text-2xl font-semibold text-white">
          Drag & Drop your file
        </h2>

        <p className="text-gray-400 mt-3">
          Upload PDF, JPG or PNG
        </p>

        <button
          type="button"
          className="
            mt-8
            bg-cyan-500
            hover:bg-cyan-600
            px-6
            py-3
            rounded-xl
            font-semibold
          "
        >
          Browse Files
        </button>

        {selectedFile && (
          <div className="mt-8 bg-slate-800 border border-cyan-500 rounded-xl p-4 text-left max-w-md mx-auto">
            <p className="text-cyan-400 font-semibold">
              Selected File
            </p>

            <p className="text-white mt-2 break-all">
              {selectedFile.name}
            </p>

            <p className="text-gray-400 text-sm mt-1">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadBox;