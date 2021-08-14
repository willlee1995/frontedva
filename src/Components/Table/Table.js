import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [

  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  { field: 'id', headerName: 'HKID', width: 150 },
 {
    field: 'Age',
    headerName: 'Age',
    type: 'number',
    width: 120,
    editable: true,
  },  
  {
    field: 'DOB',
    headerName: 'DOB',
    width: 150,
    editable: true,
  }, 
  {
    field: 'Sex',
    headerName: 'Sex',
    width: 110,
    editable: true,
  },  
  {
    field: 'Diagnosis',
    headerName: 'Diagnosis / Underlying Disease',
    width: 300,
    editable: true,
  }
]

 

const rows = [
  { Name: 'Chan Tai', id: 'T1231', Age: 33, DOB: '11-11-11', Sex: 'M', Diagnosis: 'GG'},
  { Name: 'Chan 2', id: 'T122231', Age: 33, DOB: '11-11-11', Sex: 'M', Diagnosis: 'GG'},
  { Name: 'Chan aTi', id: 'T123551', Age: 33, DOB: '11-11-11', Sex: 'M', Diagnosis: 'GG'},
  { Name: 'Chan 233i', id: 'T441231', Age: 33, DOB: '11-11-11', Sex: 'M', Diagnosis: 'GG'}

];

export default function DataTable() {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
