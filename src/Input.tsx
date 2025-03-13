import React from 'react';
interface Props {
  type: string;
  id: string;
  value: string;
  // defaultValue?:string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  text: string;
  placeholder?: string;
}
const Input = ({ type, id, value, accept, text, onChange,placeholder }: Props) => {
  return (
    <div  className='mb-4'>
      <label
        htmlFor={id}
        className="font-[500] text-xl block "
      >
        {text}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        accept={accept}
        onChange={onChange}
        className={` w-full mt-3 border-2 border-neutral-3 bg-transparent p-3`}
        placeholder={placeholder}
      />
      {id === 'avatar' && (
        <p className="text-neutral-3 text-sm flex gap-2 mt-2">
          <img
            src="/images/icon-info.svg"
            alt="Info"
            className="inline-block"
          />
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      )}
    </div>
  );
};

export default Input;
