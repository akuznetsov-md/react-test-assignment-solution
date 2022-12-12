import { useState } from "react";
import { joinClassNames } from "../../utils/joinClassNames";
import { TextInputClearButton } from "./TextInputClearButton";
import "./TextInput.css";
import React from "react";

interface TextInputProps extends React.ComponentProps<"input"> {
  inputClassName?: string;
  rightControl?: JSX.Element;
  helperText?: string;
  isInvalid?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      className,
      inputClassName,
      rightControl,
      helperText,
      isInvalid,
      onChange: onChangeBase,
      ...inputProps
    } = props;
    const [value, setValue] = useState("");

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value);
      onChangeBase?.(e);
    };

    const onClear = () => {
      setValue("");
    };

    return (
      <div
        className={joinClassNames([
          "text-input",
          className,
          isInvalid ? "text-input__invalid" : null,
        ])}
      >
        <input
          {...inputProps}
          ref={ref}
          className={joinClassNames(["text-input_input", inputClassName])}
          value={value}
          onChange={onChange}
        />
        {rightControl}
        {value.length > 0 && <TextInputClearButton onClick={onClear} />}
        {helperText && (
          <div
            className={joinClassNames([
              "text-input_helper-text",
              isInvalid ? "text-input_helper-text__invalid" : null,
            ])}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);
