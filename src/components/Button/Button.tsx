import { joinClassNames } from "../../utils/joinClassNames";
import "./Button.css";

interface ButtonProps extends React.ComponentProps<"button"> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button {...props} className={joinClassNames(["button", className])} />
  );
}
