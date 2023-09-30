import "./menu-item.scss";
import { Link } from "react-router-dom";

export default function MenuItem({ item }) {
  return (
    <div className="menu-item" key={item.id}>
      <span className="menu-item-title">{item.title}</span>

      <div className="list-items">
        {item.listItems.map((listItem) => (
          <Link to="/" className="list-item" key={listItem.id}>
            <img src={listItem.icon} alt="" className="list-icon" />
            <span>{listItem.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
