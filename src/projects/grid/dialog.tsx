import { Dialog } from '@material-ui/core';
import { useEffect, useState } from 'react';
import React from 'react';


type DialogType = {
    Opened: boolean,
    dataAdded: (data: any) => void
};
const DialogBox: React.FC<DialogType> = (props:DialogType) => {

    let formData = {
        "fname": "",
        "lName": "",
        "age": 0
    };
    let [fData, setfDate] = useState(formData);
    let [dialogOpen, setDailogOpen] = useState(props.Opened);

    useEffect(() => {
        setDailogOpen(props.Opened);
    }, [props.Opened]);

    const handleClose = () => {
        setDailogOpen(false);
    };
    const setData = (name: string, value: string) => { 
        setfDate({ ...fData, [name]: value });
        console.log('a');
    }
    const handleFData = () => {
        const dataToSend = fData;
        setfDate(formData);
        handleClose();
        props.dataAdded(dataToSend);
    };

    return (
        <>
            <Dialog open={dialogOpen} onClose={handleClose}>
                <div style={{ height: '300px', width: '400px', backgroundColor: 'darkgreen' }}>
                    <label htmlFor="firstname">First Name:</label>
                    <input data-testid="fname-input" type="text" value={fData.fname} required id='firstname' onChange={(event) => setData('fname', event.target.value)}></input>
                    <br></br>
                    <label htmlFor="lastname">Last Name:</label>
                    <input data-testid="lname-input" type="text" value={fData.lName} required id='lastname' onChange={(event) => setData('lName', event.target.value)}></input>
                    <br></br>
                    <label htmlFor="age">Age:</label>
                    <input data-testid="age-input" type="number" value={fData.age} required id="age" onChange={(event) => setData('age', event.target.value)}></input>
                </div>
                <button data-testid="Button-Save" onClick={handleFData}>Save</button>
            </Dialog>
        </>
    )

}
export default DialogBox;