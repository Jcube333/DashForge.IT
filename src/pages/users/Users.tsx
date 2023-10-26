import "./users.scss";

import DataTable from "../../components/data-table/DataTable.tsx";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../Data.ts";
import { useState } from "react";
import AddModal from "../../components/add-modal/AddModal.tsx";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 110,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 110,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 110,
    type: "bool",
    renderCell: (params) => {
      return (
        <div className="verified">
          <img
            src={
              params.row.verified
                ? "./verified-final.png"
                : "./not-verified-2.png"
            }
            alt=""
          />
        </div>
      );
    },
  },
];

export default function Users() {
  const [isModalActive, setModalActive] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button
          onClick={() => {
            setModalActive(true);
          }}
        >
          Add a new User
        </button>
      </div>

      <DataTable slug="users" cols={columns} rows={userRows} />
      {isModalActive && (
        <AddModal
          slug="user"
          setModalActive={setModalActive}
          colEntries={columns}
        />
      )}
    </div>
  );
}
