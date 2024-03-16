import Button from "../Button/Button";
import { InputType } from "../styles/common";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  width,
  height,
  border,
  background,
  color,
  className,
  onClick
}: InputType) => {
  return (
    <div className="input-container">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: width,
          height: height,
          border: border,
          background: background,
          color: color,
        }}
      />
      <Button onClick={onClick} className={"btn"} />
    </div>
  );
};

export default Input;
