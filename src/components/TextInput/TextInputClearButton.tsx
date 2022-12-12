import "./TextInputClearButton.css";

interface TextInputClearButtonProps extends React.ComponentProps<"button"> {}

export function TextInputClearButton(props: TextInputClearButtonProps) {
  return (
    <button
      {...props}
      className="text-input-clear-button"
      type="button"
      tabIndex={-1}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.69635 3.71966C4.40345 3.42677 3.92858 3.42677 3.63569 3.71966C3.34279 4.01255 3.34279 4.48743 3.63569 4.78032L10.9393 12.0839L3.63628 19.3869C3.34339 19.6798 3.34339 20.1547 3.63628 20.4476C3.92917 20.7405 4.40405 20.7405 4.69694 20.4476L11.9999 13.1446L19.3029 20.4476C19.5958 20.7405 20.0707 20.7405 20.3636 20.4476C20.6565 20.1547 20.6565 19.6798 20.3636 19.3869L13.0606 12.0839L20.3642 4.78033C20.6571 4.48744 20.6571 4.01256 20.3642 3.71967C20.0713 3.42678 19.5964 3.42678 19.3035 3.71967L11.9999 11.0233L4.69635 3.71966Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
