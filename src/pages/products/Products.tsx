import "./products.scss";

import DataTable from "../../components/data-table/DataTable.tsx";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { products } from "../../Data.ts";
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
    field: "title",
    type: "string",
    headerName: "Title",
    width: 220,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 110,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 140,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 110,
    type: "bool",
    renderCell: (params) => {
      return (
        <div className="verified">
          <img
            src={
              params.row.inStock
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
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button
          onClick={() => {
            setModalActive(true);
          }}
        >
          Add a new product
        </button>
      </div>

      <DataTable slug="products" cols={columns} rows={products} />
      {isModalActive && (
        <AddModal
          slug="product"
          setModalActive={setModalActive}
          colEntries={columns}
        />
      )}
    </div>
  );
}
