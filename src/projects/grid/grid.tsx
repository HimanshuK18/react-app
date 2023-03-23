import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import DialogBox from './dialog';

function DataGridDemo() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 }
    ];
    const [open, setOpen] = useState(false);
    const [datarows, setRown] = useState(rows);
    const addnew = () => {
        setOpen(true);
    };
    const addRow = (data: any) => {
        const newData = {
            id: datarows.length + 1, lastName: data.fname, firstName: data.lName, age: data.age
        }
        setRown(
            datarows => 
            [...datarows, newData]
            );
        setOpen(false);
    }

    return (<>
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={datarows} columns={columns} />
        </div>
        <button onClick={addnew}>Add New</button>
        <DialogBox Opened={open} dataAdded={addRow}></DialogBox>
    </>)
}

export default DataGridDemo;