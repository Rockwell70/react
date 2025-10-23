//npm start to run

import './styles.css'
export default function MyForm() {
    return (
        <>
            <label>
                Checkbox: <input type="checkbox" name="myCheckbox" className="checkbox-container"/>
            </label>
            <hr/>
            <label>
                Checkbox2: <input type="checkbox" name="myCheckbox" className="checkbox-container"/>
            </label>
            <hr/>
            <label>
                Checkbox3: <input type="checkbox" name="myCheckbox" className="checkbox-container"/>
            </label>
        </>
    )
}
