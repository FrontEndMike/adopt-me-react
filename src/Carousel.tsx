import React, {
  KeyboardEvent as ReactKeyboardEvent,
  useState,
  MouseEvent,
} from 'react'

interface IProps {
  images?: string[] // optional so a default value can be used
}

const Carousel: React.FC<IProps> = ({
  images = ['http://pets-images.dev.apis.com/pets/none.jpg'],
}: IProps) => {
  const [active, setActive] = useState<number>(0)

  const handleIndexClick = (e: MouseEvent<HTMLButtonElement>) => {
    const index = e.currentTarget.dataset.index
    if (index !== undefined) {
      setActive(Number(index))
    }
  }

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault() // prevent scrolling on space
      const index = e.currentTarget.dataset.index
      if (index !== undefined) {
        setActive(Number(index))
      }
    }
  }

  return (
    <div className="mb-4 grid grid-cols-1 justify-between md:grid-cols-2">
      <img src={images[active]} className="rounded-full" alt="animal hero" />
      <div className="carousel-smaller text-center">
        {images.map((photo, index) => (
          <button
            type="button"
            tabIndex={0}
            data-index={index.toString()}
            key={`${photo}-${index}`} // safer key
            onClick={handleIndexClick}
            onKeyDown={handleKeyDown}
            aria-pressed={index === active}
            aria-label={`View image ${index + 1}`}
            className={index === active ? 'active' : ''}
          >
            <img src={photo} alt={`animal thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
