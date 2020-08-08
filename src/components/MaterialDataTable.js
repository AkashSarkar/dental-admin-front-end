import React from 'react';
import MaterialTable from 'material-table';
import {
  AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear,
  DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt,
  Search, ViewColumn
} from "@material-ui/icons";
import { forwardRef } from 'react';
import { API_URL } from '../config';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const MaterialDataTable = (
  {
    heads, data, onEdit, onDelete
  }
) => {
  const [state, setState] = React.useState({
    columns: JSON.parse(JSON.stringify(heads)),
    data: JSON.parse(JSON.stringify(data)),
  });
  const editItem = (id) => {
    onEdit(id)
  }
  const deleteItem = (id) => {
    onDelete(id);
  }

  return (
    <MaterialTable
      icons={tableIcons}
      title=""
      columns={[
        ...state.columns,
        {
          field: 'img',
          title: 'Image',
          render: rowData => (
            <img
              src={rowData.img}
              alt='image'
              height={40}
            />
          )
        },
        {
          field: 'action',
          title: 'Action',
          render: rowData => (
            <div className="d-flex flex-row">
              <button
                className="btn btn-secondary btn-sm mr-1"
                onClick={() => editItem(rowData.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteItem(rowData.id)}
              >
                Delete
              </button>
            </div>
          )
        }
      ]}
      data={state.data}
    />
  );
}
export default MaterialDataTable;
