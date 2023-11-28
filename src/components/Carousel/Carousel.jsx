import { Carousel } from 'flowbite-react';

export const MyCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-102">
      <Carousel className="rounded-none custom-class-carousel">
        <img src="https://res.cloudinary.com/djpifu0cl/image/upload/v1665077272/jwyaygg7m2y4thwwyyvc.jpg" alt="..." />
        <img src="https://res.cloudinary.com/djpifu0cl/image/upload/v1665085347/s3vcpnygsbpjnxvqrbq2.jpg" alt="..." />
        <img src="https://res.cloudinary.com/djpifu0cl/image/upload/v1665076915/uwfasrse09yyxh4hlrqv.jpg" alt="..." />
      </Carousel>
    </div>
  )
}

