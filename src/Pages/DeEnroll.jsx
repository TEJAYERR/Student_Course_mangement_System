import { useState } from "react";


const DeEnroll = () => {

    const [name, setname] = useState("");
    const [stu_id, setStu_id] = useState();

    const handleChange = (e) =>{
        setStu_id(e.target.value)
    }

    const getData = async (e) =>{

        e.preventDeafult();
        const response = await fetch("http://localhost:8080/api/enroll",{
            method
        });
    }

    return(

        <div>

            <p>{stu_id}</p>
            <form action="">
                <input 
                    value={stu_id} 
                    type="text" 
                    placeholder="Enter Student Registration Number" 
                    className="border border-black p-2 w-100 outline-none" 
                    onChange={handleChange}
                />
                <br />
                <button type="submit" className="mt-2 border border-black p-1 w-50" onClick={getData}>Submit</button>
            </form>

        </div>
    )
}

export default DeEnroll;