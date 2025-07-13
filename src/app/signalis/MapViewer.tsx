const rooms = [
  {
    name: "STERN HALL",
    current: false,
    shape: "diamond",
    doors: {
      above: "available",
      left: "unavailable",
      right: null,
      below: "available",
    },
  },
  {
    name: "MESS HALL",
    current: false,
    shape: "octagon",
    doors: {
      above: "available",
      left: "unavailable",
      right: null,
      below: "available",
    },
  },
  {
    name: "FORWARD HALL",
    current: false,
    shape: " square",
    doors: {
      above: "available",
      left: "unavailable",
      right: null,
      below: "available",
    },
  },
];

const MapViewer = () => {
  return (
    <div className="w-full min-h-9/12 border border-amber-700">
      {rooms.map((room) => {
        const { name } = room;
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
};

export default MapViewer;
