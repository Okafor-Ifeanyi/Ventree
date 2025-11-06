interface TextAreaInputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    rows?: number;
    required?: boolean;
    label?: string; // optional label
  }
  
  export default function TextAreaInput({
    name,
    value,
    onChange,
    placeholder,
    rows = 4,
    required,
    label
  }: TextAreaInputProps) {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block mb-1  font-medium text-text"
          >
            {label}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required={required}
        />
      </div>
    );
  }