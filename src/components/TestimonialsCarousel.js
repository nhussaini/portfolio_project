import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//avatars imports
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
      <div className="myCarousel">
        <img src={avatar1} alt="John Doe"/>
        <h3>John Doe 1</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      </>

      <>
      <div className="myCarousel">
      <img src={avatar2} alt="Jane Doe"/>
        <h3>Jane Doe 2</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>

      </>

      <>
      <div className="myCarousel">
        
      <img src={avatar3} alt="John Doe3"/>
        <h3>John Doe 3</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>

      </>

      <>
      <div className="myCarousel">
        
      <img src={avatar4} alt="John Doe4"/>
        <h3>John Doe 4</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>

      </>
    </Carousel>
  )
}

export default TestimonialsCarousel
