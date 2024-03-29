
import { useState, useEffect } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    useEffect(() => {
        console.log(`${name} selected ${fruit}`)
    }, [fruit])

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => setFruit(e.target.value)} value={fruit}>
                <option value='apple'>Apple</option>
                <option value='orange'>Orange</option>
                <option value='banana'>Banana</option>
            </select>
        </div>
    );
}
export default Exercise2;