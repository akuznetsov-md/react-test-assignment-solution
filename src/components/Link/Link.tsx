import { joinClassNames } from "../../utils/joinClassNames";
import "./Link.css";

interface LinkProps extends React.ComponentProps<"a"> {}

export function Link({ className, ...props }: LinkProps) {
  return <a {...props} className={joinClassNames(["link", className])} />;
}
