import parse from "html-react-parser";
export default function BannerText({ para, heading1, heading2, heading3 }) {
  return (
    <div
      className={`slider_caption container absolute z-10 top-[40%] -translate-y-1/2 mx-auto left-0 right-0 px-4 text-left text-white drop-shadow-lg`}
    >
      <div className="overflow-hidden">
        <p>{parse(para)}</p>
      </div>
      <div className="overflow-hidden">
        <h1>{parse(heading1)}</h1>
      </div>
      <div className="overflow-hidden">
        <h2>{parse(heading2)}</h2>
      </div>
      <div className="overflow-hidden">
        <h3>{parse(heading3)}</h3>
      </div>
    </div>
  );
}
