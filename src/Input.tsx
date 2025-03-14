import React from 'react';
interface Props {
  type: string;
  id: string;
  value?: string;
  // defaultValue?:string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  text: string;
  placeholder?: string;
  classes?: string;
  message?: string;
}
const Input = ({
  type,
  id,
  value,
  accept,
  text,
  onChange,
  placeholder,
  classes,
  message,
}: Props) => {
  return (
    <div className="mb-8 relative">
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
        className={` w-full mt-2 border-2  bg-transparent p-3 rounded-lg font-display text-md ${classes} ${message ? 'border-orange-700' : 'border-neutral-3'} `}
        placeholder={placeholder}
      />
      {id === 'avatar' && (
        <p className={` text-sm flex gap-2 mt-2 relative -bottom-42 md:-bottom-34 ${message ? 'error text-orange-700' : 'text-neutral-3'}`}>
          <img
            src="/images/icon-info.svg"
            alt="Info"
            className="inline-block"
          />
          {!message && 'Upload your photo (JPG or PNG, max size: 500KB).'}
          {message && message}
        </p>
      )}
      {(id !== 'avatar' && message ) && (
        <div className="flex gap-2 text-orange-700 text-sm mt-2 error absolute -bottom-6">
          <img  src="/images/icon-info.svg"
            alt="Info" />
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
