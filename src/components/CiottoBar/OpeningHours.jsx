export default function OpeningHours({ days, hours }) {
  return (
    <div className="flex justify-between leading-none">
      <p className="">{days}</p>
      <p className="">{hours}</p>
    </div>
  );
}
