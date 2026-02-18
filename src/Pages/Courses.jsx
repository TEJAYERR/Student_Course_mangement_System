import { useEffect, useState } from "react";


const Courses = () => {

    const[isLoading, setIsLoading] = useState(true);
    const[courses, setCourse] = useState([]);
    const[enrollMsg, setEnrollMsg] = useState();

    const getCourses = async () => {

        try {

            setIsLoading(true);
            const response = await fetch("https://ernestine-intertentacular-semidecadently.ngrok-free.dev/Student-Course-Registration-System/courses",{
                        headers: new Headers({
                            "ngrok-skip-browser-warning": "true",
                            "Accept": "application/json" // Also ensure you ask for JSON explicitly
                        }),
            });
            const data = await response.json();
            
            setIsLoading(false);
            setCourse(data);
            console.log(data);
            setIsLoading(false);
        } 
        catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
        getCourses();
    },[])

    return(
        <div>
            <h2 className="text-xl font-medium text-center">Course List</h2>
            <div>
                {isLoading ?(
                        <p>Loading........</p>
                    ) :
                    (
                        <ul className="border border-black mb-2">
                            <li className="flex justify-around font-medium border border-black">
                                <span>Id</span> 
                                <span>name</span>
                            </li>
                            {courses.map((course) => (
                                <li className="flex justify-around" key={course.id}>
                                    <span>{course.id}</span>
                                    <span>{course.name}</span>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Courses;