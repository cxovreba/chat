import Image from "../Image/Image";
import { ButtonType } from "../styles/common";

const Button = ({ onClick, className }: ButtonType) => {
  return (
    <button className={className} onClick={onClick}>
      <Image />
    </button>
  );
};

export default Button;
