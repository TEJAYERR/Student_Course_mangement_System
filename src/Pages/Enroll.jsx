import { useEffect, useState } from "react";
import Courses from "./Courses";


const Enroll = () => {

    const [stuId, setStuId] = useState("");
    const [courseId, setCourseId] = useState("");
    const[isError, setIsError] = useState(false);
    const[enrollMsg, setEnrollMsg] = useState([]);
    const[isEnrolling, setIsEnrolling] = useState(false);

    const handleChangeStudent = (e) =>{
        setStuId(e.target.value)
        setEnrollMsg([]);
    }

    const handleChangeCourse = (e) =>{
        setCourseId(e.target.value)
        setEnrollMsg([]);
    }

    const enrollStudent = async (e) => {
        e.preventDefault();

        const trimmedStuId = stuId.trim();
        const trimmedCourseId = courseId.trim();
        
        try{

            setIsEnrolling(true);
            setEnrollMsg([]);

            const response = await fetch(`https://ernestine-intertentacular-semidecadently.ngrok-free.dev/Student-Course-Registration-System/enroll?studentId=${trimmedStuId}&courseId=${trimmedCourseId}`,{
                method :"POST",
            });

            const data = await response.json();
            setIsEnrolling(false);
            setEnrollMsg(data)
        }
        catch(e){
            console.log(e);
        }

    };

    return(

        <div>
            <Courses />
            <form onSubmit={enrollStudent}>
                <input 
                    value={stuId} 
                    type="text" 
                    placeholder="Enter Student Registration Number" 
                    className="border border-black p-2 w-100 outline-none mt-2" 
                    onChange={handleChangeStudent}
                />
                <br />
                <input 
                    value={courseId} 
                    type="text" 
                    placeholder="Enter Course Id from list to register" 
                    className="border border-black p-2 w-100 outline-none mt-2" 
                    onChange={handleChangeCourse}
                />
                <br />
                <button type="submit" className="mt-2 border border-black p-1 w-50 cursor-pointer">Submit</button>
            </form>
            {(isEnrolling) && <p>Enrolling wait......</p> }
            <p className="">{enrollMsg.length > 0 && enrollMsg[0].result}</p>
        </div>
    )
}

export default Enroll;