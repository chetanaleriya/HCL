import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from "./edu2.jpg";
import image2 from "./edu3.jpg";
import image3 from "./edu4.jpg";
import "./home.css";


function Home() {
  return (
    <div className='image4'>
        
    <Carousel>
         
      <Carousel.Item>
        <img src={image1} width="100%" height={500}></img>
        <Carousel.Caption>
          <h1>Launch Your Web Career</h1>
         <h2>From Higher Coding Language (HCL)</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} width="100%" height={500}></img>
        <Carousel.Caption>
        <h1>Launch Your Web Career</h1>
        <h2>From Higher Coding Language (HCL)</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} width="100%" height={500}></img>
        <Carousel.Caption>
        <h1>Launch Your Web Career</h1>
        <h2>From Higher Coding Language (HCL)</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      
      <center><h1>Higher Coding Language</h1></center>
      </div>
    </div>
    
    
    
  );
  
}

export default Home;