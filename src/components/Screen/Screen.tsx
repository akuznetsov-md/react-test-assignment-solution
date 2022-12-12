import { joinClassNames } from "../../utils/joinClassNames";
import "./Screen.css";

interface ScreenProps extends React.ComponentProps<"div"> {}

export function Screen({ className, ...props }: ScreenProps) {
  return <div {...props} className={joinClassNames(["screen", className])} />;
}

interface ScreenHeaderProps extends React.ComponentProps<"div"> {}

export function ScreenHeader({ className, ...props }: ScreenHeaderProps) {
  return (
    <div {...props} className={joinClassNames(["screen_header", className])} />
  );
}

interface ScreenMainProps extends React.ComponentProps<"div"> {}

export function ScreenMain({ className, ...props }: ScreenMainProps) {
  return (
    <main {...props} className={joinClassNames(["screen_main", className])} />
  );
}

interface ScreenFooterProps extends React.ComponentProps<"div"> {}

export function ScreenFooter({ className, ...props }: ScreenFooterProps) {
  return (
    <div {...props} className={joinClassNames(["screen_footer", className])} />
  );
}
