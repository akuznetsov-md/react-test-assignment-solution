import logo from "./logo.svg";

interface LogoProps extends React.ComponentProps<"img"> {}

export function Logo(props: LogoProps) {
  return <img {...props} src={logo} alt="Mercury Development" />;
}
