import React, { useState } from 'react'

const Carousel = ({
  images = ['http://pets-images.dev.apis.com/pets/none.jpg'],
}) => {
  const [active, setActive] = useState(0)

  const handleIndexClick = (e) => {
    setActive(+e.target.dataset.index)
  }

  return (
    <div className="mb-4 grid grid-flow-col grid-cols-1 justify-between md:grid-cols-2">
      <img src={images[active]} className="rounded-full" alt="animal hero" />
      <div className="carousel-smaller text-center">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            onClick={handleIndexClick}
            data-index={index}
            key={photo}
            src={photo}
            className={index === active ? 'active' : ''}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
