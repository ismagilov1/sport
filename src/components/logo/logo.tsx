import logo from "../../assets/logo-w.svg";

export default function Logo({ size }: { size: number }) {
  return <img width={size} src={logo} alt="Логотип" />;
}
