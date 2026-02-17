import { useEffect, useState } from "react";


const Courses = () => {

    const[isLoading, setIsLoading] = useState(true);
    const[courses, setCourse] = useState([]);

    const getCourses = async () => {

        try {
            const response = await fetch("https://ernestine-intertentacular-semidecadently.ngrok-free.dev/Student-Course-Registration-System/courses");
            const data = await response.json();
            // if(!response.ok){

            // }
            setCourse(data);
            setIsLoading(false);
        } 
        catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
        getCourses();
    },[])

    const loading = () => {

        if(isLoading){
            return(
                <div>Loading........</div>
            )
        }
        else{
            return(
                <ul className="flex flex-col gap-2 border border-black mb-2">
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
    }


    return(
        <div>
            <h2 className="text-xl font-medium text-center">Course List</h2>
            {loading()}
        </div>
    )
}

export default Courses;