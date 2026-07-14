import { FiUploadCloud } from "react-icons/fi";

function UploadBox() {
  return (

    <div className="mt-16">

      <div
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

        <FiUploadCloud
          className="mx-auto text-6xl text-cyan-400"
        />

        <h2 className="mt-5 text-2xl font-semibold text-white">
          Drag & Drop your file
        </h2>

        <p className="text-gray-400 mt-3">
          Upload PDF, JPG or PNG
        </p>

        <button
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

      </div>

    </div>

  );
}

export default UploadBox;