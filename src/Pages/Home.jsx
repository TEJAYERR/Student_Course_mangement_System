import { useState } from "react";
import { Link } from "react-router-dom";


const Home = ({setCourse}) => {

    // const [course, setCourse] = useState(0);

    return(
        <div className='border border-black p-7 flex flex-col gap-4 items-center justify-center text-xl font-medium'>
            <p className='hover:text-blue-400'>
                 <Link to="/enroll">Enroll a New Course</Link>
            </p>
            <p className='hover:text-blue-400'>
                <Link to="/deenroll">Remove Enrollment of a Course</Link>
            </p>
        </div>
    )
}

export default Home;