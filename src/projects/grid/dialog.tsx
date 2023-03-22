import { Dialog } from '@material-ui/core';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


type DialogType = {
    Opened: boolean,
    dataAdded: (data: any) => void
};
function DialogBox(props: DialogType) {
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
        const newJsonData = { ...fData, [name]: value };
        setfDate(newJsonData);
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
                    <input type="text" value={fData.fname} required name='firstname' onChange={(event) => setData('fname', event.target.value)}></input>
                    <br></br>
                    <label htmlFor="username">Last Name:</label>
                    <input type="text" value={fData.lName} required name='lastname' onChange={(event) => setData('lName', event.target.value)}></input>
                    <br></br>
                    <label htmlFor="age">Age:</label>
                    <input type="number" value={fData.age} required name="age" onChange={(event) => setData('age', event.target.value)}></input>
                </div>
                <button onClick={handleFData}>Save</button>
            </Dialog>
        </>
    )

}
export default DialogBox;