export default function Input({ title, inputVal, inputType, func, disabled }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="">{title}</p>
        <input
          type={inputType}
          placeholder={inputVal}
          className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 ${
            disabled && "cursor-not-allowed placeholder:text-neutral-300"
          }`}
          onChange={func}
          disabled={disabled}
        ></input>
      </div>
    </>
  );
}
