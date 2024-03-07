
import { Link, Outlet } from "react-router-dom";

import './home.style.css';
import Navigation from "../../Component/Navigation bar/navigation.component";
const Home = ()=>{
    return(
        <div className="full-page">
            <Navigation/>
            <div className="project-bar-and-project-display">
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
        </div>
    )
}

export default Home;