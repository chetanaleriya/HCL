import  edu1 from "./edu1.jpg";
import edu2 from "./edu2.jpg";
import edu3 from "./edu3.jpg";
import "./contact.css";
import Button from 'react-bootstrap/Button';

function Contact()
{
    return(
        
        <div className="contact">
             
        <h1>Let us know what you are looking for</h1>
        <div className="contact1">
        <p>At Internet Academy, we want to help people get where<br></br>
             they want to be - from people who want to add to their diverse <br></br>
             skillsets, to companies that are looking for talent or <br></br>
             who want more from their employees.</p>
        <img className="image" src={edu1} width="250px" height="250px"></img>
        </div>
        <div className="button">
       <Button className="button1" variant="primary">Join a Course</Button>
       <Button className="button2"variant="primary">Hire a Graduate</Button>


        </div>
        
        <div className="contact2">
            <span>For the Overachievers</span><br/>
            <div className="img">
            <div className="image1">  
            <img  src={edu2} width={300} height={250}></img>
            <div className="text1">
            <span>Attend a Demo Lesson</span>
            <p>If you want to know more about how we do things, <br></br>
                come sit in one of our classes and get a feel <br></br>
                for our lesson style and teaching methods!</p>
            </div>
            </div>
            
            <div className="image2">
            <img  src={edu3} width={300} height={250}></img>
            <div className="text2">
            <span>Sit down with our Counsellors</span>
            <p>Need help figuring out a new course of action?<br></br>
                 Talk to our career guides and pick out <br></br>
                 a path that suits your needs.</p>
            </div>
            </div>
        </div>
        </div>
        <div className="contact3">
            <h1>Inquire by Phone or E-mail</h1>
            <p>Feel free to contact us via phone or send us an e-mail. We will answer any questions you may have.</p>
            <button className="button3">Email<br></br>chetanaleriya1037@gmail.com</button>
            <button className="button4">Phone<br></br> +91 90096-82255</button>
        </div>
        </div>
        
    )
}
export default Contact