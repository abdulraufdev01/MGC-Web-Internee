
import { useState } from 'react'
import axios from 'react'
export default function Admin() {
    let [name, setname] = useState('')
    let [model, setmodel] = useState('')
    let [type, settype] = useState('')

    async function Insert() {
        let data = { name: name, model: model, type: type }
        let serverRes = await axios.post('http://localhost:8080/insert', data);

    }



    return (
        <div>
            <input type='text' placeholder='enter name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type='text' placeholder='enter model name' value={model} onChange={(e) => setmodel(e.target.value)} />
            <input type='text' placeholder='enter type' value={type} onChange={(e) => settype(e.target.value)} />
            <button onClick={Insert}>Add</button>
        </div>
    )

}