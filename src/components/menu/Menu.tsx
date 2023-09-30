import "./menu.scss";
import { menuData } from "../../Data";
import MenuItem from "../menu-item/MenuItem";
export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-items-wrapper">
        {menuData.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </div>
  );
}
