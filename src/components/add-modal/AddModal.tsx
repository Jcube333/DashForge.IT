//General Purpose Add Modal For users and modals

import { GridColDef } from "@mui/x-data-grid";
import "./add-modal.scss";

type Props = {
  slug: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  colEntries: GridColDef[];
};

export default function AddModal(props: Props) {
  const handleAddSubmit = (e) => {
    e.preventDefault();
    //Add a user to db api
    //axios.post(`/api/${props.slug}s`)
  };

  return (
    <div className="add-modal">
      <div className="modal-box">
        <div className="modal-header">
          <h1>Add a new {props.slug}</h1>
          <span
            onClick={() => {
              props.setModalActive(false);
            }}
          >
            X
          </span>
        </div>

        <form onSubmit={handleAddSubmit}>
          {props.colEntries
            .filter((entry) => entry.field != "img" && entry.field != "id")
            .map((entry) => {
              return (
                <div className="item">
                  <label htmlFor="">{entry.headerName}</label>
                  <input type={entry.type} placeholder={entry.field} />
                </div>
              );
            })}

          <button type="submit">Add a {props.slug}</button>
        </form>
      </div>
    </div>
  );
}
