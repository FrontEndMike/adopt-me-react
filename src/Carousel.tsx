import React, { useState, MouseEvent } from 'react'

interface IProps {
  images?: string[] // optional so a default value can be used
}

const Carousel: React.FC<IProps> = ({
  images = ['http://pets-images.dev.apis.com/pets/none.jpg'],
}: IProps) => {
  const [active, setActive] = useState<number>(0)

  const handleIndexClick = (e: MouseEvent<HTMLImageElement>) => {
    const index = e.currentTarget.dataset.index
    if (index !== undefined) {
      setActive(Number(index))
    }
  }

  return (
    <div className="mb-4 grid grid-flow-col grid-cols-1 justify-between md:grid-cols-2">
      <img src={images[active]} className="rounded-full" alt="animal hero" />
      <div className="carousel-smaller text-center">
        {images.map((photo, index) => (
          <img
            onClick={handleIndexClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleIndexClick(e as any) // cast needed since event type is KeyboardEvent
              }
            }}
            role="button"
            tabIndex={0}
            data-index={index.toString()}
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
