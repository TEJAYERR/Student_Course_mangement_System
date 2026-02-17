import { useEffect, useState } from "react";
import Courses from "./Courses";


const Enroll = () => {

    const [stuId, setStuId] = useState("");
    const [courseId, setCourseId] = useState("");
    const[isError, setIsError] = useState(false);

    const handleChangeStudent = (e) =>{
        setStuId(e.target.value)
    }

    const handleChangeCourse = (e) =>{
        setCourseId(e.target.value)
    }

    const enrollStudent = async (e) => {
        e.preventDefault();

        const trimmedStuId = stuId.trim();
        const trimmedCourseId = courseId.trim();

        console.log(trimmedStuId, trimmedCourseId)
        let response;
        try{
            response = await fetch(`http://localhost:8080/Student-Course-Registration-System/enroll?studentId=${trimmedStuId}&courseId=${trimmedCourseId}`,{
                method :"POST",
            });
        }
        catch(e){
            console.log(e);
        }

    };

    const enrolled = () => {

        if(isEnrolled){
            return(
                <div>Student enrolled Successfully!!</div>
            )
        }
        else{
            return(
                <div>Not Enrolled Successfully</div>
            )
        }
    }

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
        </div>
    )
}

export default Enroll;