import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Course from "../components/Course"

const Courses = () => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen">
            <Course/>
        </div>
        <Footer/>
    </div>
  )
}

export default Courses