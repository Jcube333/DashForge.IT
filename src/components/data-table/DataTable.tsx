import { Link } from "react-router-dom";
import "./data-table.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

type Props = {
  cols: GridColDef[];
  rows: object[];
  target: string;
};

export default function DataTable(props: Props) {
  const handleDelete = (id: number) => {
    //Api
    console.log(id + " has been Deleted");
  };
  const actionColum: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`${props.target}/${params.row.id}`}>
            <img src="./view.svg" alt="" />
          </Link>
          <div
            className="delete"
            onClick={() => {
              handleDelete(params.row.id);
            }}
          >
            <img src="./delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="data-table">
      <DataGrid
        className="data-grid"
        rows={props.rows}
        columns={[...props.cols, actionColum]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}
