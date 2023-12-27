import { Carousel } from 'flowbite-react';

export const MyCarousel = () => {
  return (
    <div className="h-[150px] sm:h-[380px] xl:h-120">
      <Carousel className="rounded-none custom-class-carousel">
        <img className="imagen-banner" src="https://res.cloudinary.com/djpifu0cl/image/upload/v1703205624/El_mejor_Commerce_de_instrumentos_musicales._wr3p3n.png" alt="..." />
      </Carousel>
    </div>
  )
}

