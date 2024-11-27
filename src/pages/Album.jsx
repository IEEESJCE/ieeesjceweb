import React, { useState, useCallback,useEffect } from 'react'
import { render } from 'react-dom'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../components/photos.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Caraousel from '../components/Caraousel'
import '../css/photos.css'
import VideoThumbnail from '../components/VideoThumbnail'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Album() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // Set the duration of the animation
        once: true, // Only animate once
      })
    }, [])
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Navbar />
      <h1 className="heading" data-aos="fade">
        Memories
      </h1>
      <hr className="hr-1" />
      <Caraousel />
      <Gallery
        className="album"
        margin={8}
        photos={photos}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.src,
                height: x.height,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <VideoThumbnail />
      <Footer />
    </div>
  )
}
//render(<App />, document.getElementById('app'))

export default Album