import React from 'react';
import TestimonialsCarousel from "./TestimonialsCarousel";


const Testimonials = () => {
  return (
    <div className="testimonial">
      <h1>my happy clients</h1>
      <div className="container">
        <div className="testimonial-content">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
