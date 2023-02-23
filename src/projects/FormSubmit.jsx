import { useState } from 'react';
import "./FormSubmit.css";

const COLORS = ['white', 'red', 'blue', 'black', 'cream'];
function RegisterYourCatForm() {
    const [values, setValues] = useState({
        name: '', color: '', age: '', habits: ''
    });

    const set = (name) => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    const onSubmit = (event) => {
        event.preventDefault(); // Prevent default submission
        try {
            // await saveFormData();
            setValues({
                name: '', color: '', age: '', habits: ''
            });
            alert('Your registration was successfully submitted!' + JSON.stringify(values));
        } catch (e) {
            alert(`Registration failed! ${e.message}`);
        }
    };

    //console.log(values);
    return (
        <form onSubmit={onSubmit}>
            <h2>Register Your Cat</h2>
            <label>Name*:</label>
            <input type="text" required value={values.name} onChange={set('name')} />
            <label>Color*:</label>
            <select required value={values.color} onChange={set('color')}>
                <option value="">Select color</option>
                {COLORS.map(c => <option key={c}>{c}</option>)}
            </select>
            <label>Age*:</label>
            <input type="number" required min="1" value={values.age} 
            onChange={set('age')} />
            <label>Habits:</label>
            <textarea value={values.habits} onChange={set('habits')} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default RegisterYourCatForm;