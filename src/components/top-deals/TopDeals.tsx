import "./top-deals.scss";
import { topDealUsers } from "../../Data";
export default function TopDeals() {
  return (
    <div className="top-box">
      <h1>Top Deals</h1>

      <div className="list">
        {topDealUsers.map((user) => (
          <div className="list-item" key={user.id}>
            <div className="user-details">
              <img src={user.img} alt="" className="user-img" />
              <div className="user-credentials">
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
            </div>
            <p className="amount">₹{user.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
