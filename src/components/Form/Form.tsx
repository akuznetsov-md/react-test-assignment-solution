import { joinClassNames } from "../../utils/joinClassNames";
import "./Form.css";

interface FormProps extends React.ComponentProps<"form"> {}

export function Form({ className, ...props }: FormProps) {
  return <form {...props} className={joinClassNames(["form", className])} />;
}

interface FormRowProps extends React.ComponentProps<"div"> {}

export function FormRow({ className, ...props }: FormRowProps) {
  return <div {...props} className={joinClassNames(["form_row", className])} />;
}
