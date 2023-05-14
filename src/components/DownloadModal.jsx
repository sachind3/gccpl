import { AiOutlineFilePdf, AiOutlineClose } from "react-icons/ai";
export default function DownloadModal({ show, setShow }) {
  if (show) {
    return (
      <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
        <div className="max-w-lg bg-white w-full p-3 rounded-md relative shadow-xl">
          <button
            type="button"
            className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center absolute -right-3 -top-3"
            onClick={() => setShow(false)}
          >
            <AiOutlineClose />
          </button>
          <h4 className="font-semibold text-lg mb-4">
            Download PDF by language
          </h4>
          <div className="flex gap-3 flex-wrap text-sm">
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> English
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Hindi
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Marathi
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Bengali
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Tamil
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Kannada
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Telugu
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Punjabi
            </div>
            <div className="flex items-center justify-center border border-teal-500 text-teal-500 px-2 py-1 gap-2 cursor-pointer">
              <AiOutlineFilePdf /> Gujarathi
            </div>
          </div>
        </div>
      </div>
    );
  }
}
