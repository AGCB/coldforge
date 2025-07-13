const levels = ["UPPER_GALLERY", "UPPER_DECK", "PENROSE-512"];

const LevelSelector = () => {
  return (
    <div className="flex flex-col absolute bottom-4/12 left-1/12 border border-amber-300">
      {levels.map((level, i) => {
        return <span key={i}>{level}</span>;
      })}
    </div>
  );
};

export default LevelSelector;
