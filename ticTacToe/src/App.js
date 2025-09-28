//npm start to run
import { useState} from "react";

function MyButton() {
    const [count, setCount] = useState(0)
    function handleClick () {
        setCount(count + 1)
        // alert('You clicked me!');
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times.
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update seprately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}