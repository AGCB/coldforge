import LevelSelector from "./LevelSelector";
import MapViewer from "./MapViewer";

const PageTitle = () => {
  return <span className="bg-white text-black">OPEN MAP</span>;
};

const Signalis = () => {
  return (
    <div className="bg-black text-white w-screen h-screen border-4 border-t-[20px] border-red-900 mb-4 ">
      <PageTitle />
      <LevelSelector />
      <MapViewer />
    </div>
  );
};

export default Signalis;
