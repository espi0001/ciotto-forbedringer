export default function OpeningHours({ days, hours }) {
  return (
    <div className="flex justify-between w-full">
      <span className="">{days}</span>
      <span className="">{hours}</span>
    </div>
  );
}
