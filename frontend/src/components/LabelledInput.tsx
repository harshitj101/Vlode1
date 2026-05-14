import { ChangeEvent } from "react";

interface LabelledInputTypes {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const LabelledInput = ({
  label,
  type,
  placeholder,
  onChange,
}: LabelledInputTypes) => {
  return (
    <div className="flex flex-col font-popins w-full lg:w-1/2">
      <label className="mx-2 text-md font-medium">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="lg:text-lg text-md p-2 rounded-sm border min-w-56 border-mediumGray "
      />
    </div>
  );
};
export default LabelledInput;
