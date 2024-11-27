import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../css/caraousel.css'
function Caraousel() {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
        selectedItem={0}
        transitionTime={700}
        showStatus={false}
      >
        <div>
          <img src="/photos/gallery/caraousel/sl1.jpg" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/_DSC0058.jpg" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/IMG_2770.JPG" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/20230604_182334.jpg" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/sl5.jpeg" alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default Caraousel
