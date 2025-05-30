export default function InputField({ label, id, name, type = "text", textarea = false, rows = 4, value, onChange, placeholder, error = false, errorMessage = "" }) {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={id} className="uppercase mb-1 transition-colors">
        {label}
      </label>
      <div className="relative flex items-center">{textarea ? <textarea id={id} name={name} rows={rows} className={"border w-full border-secondary-text/80 py-1 px-2 focus:outline-none focus:border-secondary-text transition-colors resize-none bg-transparent"} value={value} onChange={onChange} placeholder={placeholder} /> : <input type={type} id={id} name={name} className={"border w-full border-secondary-text/80 pt-1 pb-2 px-2 focus:outline-none focus:border-secondary-text transition-colors bg-transparent"} value={value} onChange={onChange} placeholder={placeholder} />}</div>
      {error && errorMessage && <span className="text-red-700 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
}
