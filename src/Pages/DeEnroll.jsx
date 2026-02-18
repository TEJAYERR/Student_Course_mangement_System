import { useState } from "react";


const DeEnroll = () => {

    const [courseId, setCourseId] = useState("");
    const [stuId, setStuId] = useState("");
    const[courses, setCourses] = useState(null);
    const[isLoading, setIsLoading] = useState(false);
    const[msg, setMsg] = useState("");
    const[error, setError] = useState([]);
    const[displayId, setDisplayId] = useState("")

    const handleChangeStudent = (e) =>{
        setMsg("")
        setCourseId("");
        setCourses(null);
        setStuId(e.target.value);
    }

    const handleChangeCourse = (e) =>{
        setMsg("");
        setCourseId(e.target.value);
    }

    const getData = async (e) =>{

        e.preventDefault();
        const trimmedStuId = stuId.trim();
        if(trimmedStuId == ""){
            return;
        }
        
        setMsg("");
        setIsLoading(true);

        const response = await fetch(`https://ernestine-intertentacular-semidecadently.ngrok-free.dev/Student-Course-Registration-System/enroll?studentId=${trimmedStuId}`,{
            method:"GET",
        });

        const data = await response.json();
        setIsLoading(false);

        setCourses(data);
        setDisplayId(stuId);
        setStuId("");
        console.log(data)
    }

    const deleteRecord = async (e) => {

        e.preventDefault();
        
        const trimmedStudentId = displayId.trim();
        const trimmedCourseId = courseId.trim();

        try{
            setMsg("loading.....");
            const response = await fetch(`https://ernestine-intertentacular-semidecadently.ngrok-free.dev/Student-Course-Registration-System/enroll?studentId=${trimmedStudentId}&courseId=${trimmedCourseId}`,{
                method:'DELETE',
            });

            console.log(response)
            const data = await response.json();
            setMsg(data[0].result);
            console.log(data);
        }
        catch(e){
            console.log(e);
        }
    }

    return(

        <div>

            <div>
                {isLoading && <p>Loading.......</p>}
                {courses && (
                    courses[0].result ? <p>{courses[0].result}</p> :
                    <div className="p-5 border-2 border-dotted border-black mb-2">
                        <h3 className="text-xl font-medium">Courses {displayId} is Enrolled in following : </h3>
                        <ul className="border border-black my-2 w-fit">
                            {courses.map((course) => (
                                <li key={course.id}>{course.id}-------{course.name}</li>
                            ))}
                        </ul>

                        <form onSubmit={deleteRecord}>
                            <input 
                                value={courseId} 
                                type="text" 
                                placeholder="Enter Course Id to Remove Enroll" 
                                className="border border-black p-2 w-100 outline-none" 
                                onChange={handleChangeCourse}
                            />
                            <br />
                            <button type="submit" className="mt-2 border border-black p-1 w-50 cursor-pointer">submit</button>
                        </form>
                        <p>{msg}</p>
                    </div>
                )} 
            </div>

            <form onSubmit={getData}>
                <input 
                    value={stuId} 
                    type="text" 
                    placeholder="Enter Student Registration Number" 
                    className="border border-black p-2 w-100 outline-none" 
                    onChange={handleChangeStudent}
                />
                <br />
                <button type="submit" className="mt-2 border border-black p-1 w-50 cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default DeEnroll;