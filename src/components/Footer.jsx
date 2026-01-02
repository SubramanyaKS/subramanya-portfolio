import { Heart } from "lucide-react";
import { headerdata } from "../data/data";

const Footer = () => {
  return (
    <div className="footer">
      <p  style={{fontFamily:"cursive"}} className="text-center">
        <b>
          &copy;2025 Designed with{" "}
          <Heart
            fill="red"
            color="red"
          />{" "}
          by {headerdata.name}
        </b>
      </p>
    </div>
  );
};
export default Footer;