import image1 from "./hcl1.jpg";
import image2 from "./hcl2.jpg";
import "./courses.css"
function Courses()
{
    return(
        <div>
            
            <center>
         <h1>Find the right course for your needs</h1><br></br><br></br>
         <p>Whether you are a beginner in the Web Industry, or an established code ninja, there's always something to learn!</p><br></br>
        <p>Look up recommended courses by occupation, or find courses by a particular skill you would like to pick up. <br></br>Feel free to combine courses and create a package that suits you best!</p>
        <br></br>
        <p>And if you're not sure where to start, you can always talk to us.</p>
        <div className="courses">
            <div className="courses1">
            <img src={image1}  width={380} height={150}></img>
            <p>I want to learn <br></br>  <span id="web">Web Design</span> </p>
            </div>
            <div className="courses1">
            <img src={image2}  width={380} height={150}></img>
            <p>I want to learn <br></br><span id="programming">Programming</span> </p>
            </div>
        </div>

        </center>
         </div>
    )
}
export default Courses