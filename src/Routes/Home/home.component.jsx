
import { Link, Outlet } from "react-router-dom";

import './home.style.css';
const Home = ()=>{
    return(
        <div className="full-page">
            <div className="project-section">
                <Link className="project" to='/bmi-calculator'>
                    BMI Calculator
                </Link>
                <Link className="project" to='/simple-interest'>
                    Simple Interest Calculator
                </Link>
                <Link className="project" to='/monster-club'>
                    Monster's Club
                </Link>
            </div>
            <div className='project-display'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Home;