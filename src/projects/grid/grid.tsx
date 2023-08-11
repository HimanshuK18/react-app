import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import DialogBox from './dialog';
import 'core-js/actual/array/from';

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
    const newData = "Array.form('ssss')";
    const [open, setOpen] = useState(false);
    const [datarows, setRown] = useState(rows);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [strvalue, setstrvalue] = useState(newData);
    
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
        <h2>Some Polyfill Code</h2>
        <h1>{strvalue}</h1>
    </>)
}

export default DataGridDemo;