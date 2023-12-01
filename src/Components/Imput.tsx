// Import React module
interface ImputProps {
  id: string;
  type: string;
  placeholder?: string;
  name: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({
  id,
  type,
  placeholder,
  name,
  changeHandler,
}: ImputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      onChange={changeHandler}
    />
  );
};
