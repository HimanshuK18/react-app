import { ChangeEvent, useState } from 'react';
import "./FormSubmit.css";

const COLORS = ['white', 'red', 'blue', 'black', 'cream'];
function RegisterYourCatForm() {
    const [values, setValues] = useState({
        name: '', color: '', age: '', habits: ''
    });

    const set = (name: string, value: string) => {
        setValues(oldValues => ({ ...oldValues, [name]: value }));
    };

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevent default submission
        try {
            // await saveFormData();
            setValues({
                name: '', color: '', age: '', habits: ''
            });
            alert('Your registration was successfully submitted!' + JSON.stringify(values));
        } catch (e: any) {
            alert(`Registration failed! ${e.message}`);
        }
    };

    //console.log(values);
    return (
        <form onSubmit={onSubmit}>
            <h2>Register Your Cat</h2>
            <label>Name*:</label>
            <input type="text" required value={values.name} onChange={(event) => set('name', event.target.value)} />
            <label>Color*:</label>
            <select required value={values.color} onChange={(event) => set('color', event.target.value)}>
                <option value="">Select color</option>
                {COLORS.map(c => <option key={c}>{c}</option>)}
            </select>
            <label>Age*:</label>
            <input type="number" required min="1" value={values.age}
                onChange={(event) => set('age', event.target.value)} />
            <label>Habits:</label>
            <textarea value={values.habits} onChange={(event) => set('habits', event.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default RegisterYourCatForm;