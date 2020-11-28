/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import LogoDark from "assets/logo.svg";
import LogoMain from "assets/anza-dark-long.png";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        // variant: "links.logo",
        width: "250px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Image src={LogoMain} alt="anza cloud logo" />
    </Link>
  );
}
