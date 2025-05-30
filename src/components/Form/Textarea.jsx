export default function Textarea({ label, name }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-semibold uppercase">
        {label}
      </label>
      <textarea id={name} name={name} required className="border p-2 h-32 shadow-sm focus:outline-none bg-primary-text bg-opacity-70 text-white" />
    </div>
  );
}
