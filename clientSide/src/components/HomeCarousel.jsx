import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const CarouselWorthy = [
  {
    id: 0,
    title: "Title 1",
    tagline:
      "Tagline here hernvsjnvfsjfsj sf nvfsjvnsffb kbcdvdsvsdvd sdvd dvev mfsk",
    image: `/images/img1.jpg`,
  },
  {
    id: 1,
    title: "Title 2",
    tagline:
      "Tagline vsdf dvdvsv eafadvdv  vsfvsdvds  sdvsdv vsdvsv svdvsvsdvsvrvv  ",
    image: `/images/img2.jpg`,
  },
  {
    id: 2,
    title: "Title 3",
    tagline: "Tagline hsvdv efeves svdvd vgb pkimkm gb",
    image: `/images/img3.jpg`,
  },
  {
    id: 3,
    title: "Title 4",
    tagline: "Tagline here hernvvdvs advde pimoimiomvfdvsfvsfv imvef ewvs",
    image: `/images/img4.jpg`,
  },
];

const HomeCarousel = ({ cn }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const updateIndex = (swiperInstance) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.activeIndex;
    setCurrentIndex(currentSlide);
  };
  return (
    <div className={cn + " grid grid-cols-8 grid-rows-8"}>
      <Swiper
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        initialSlide={currentIndex}
        onActiveIndexChange={updateIndex}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={5}
        className="myswiper w-full col-span-full row-span-full md:h-[75vh] h-[50vh] rounded-2xl"
      >
        {CarouselWorthy.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <div className="w-full h-full">
              <img
                src={carousel.image}
                alt={carousel.image}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {CarouselWorthy.filter((carousel) => carousel.id === currentIndex).map(
        (currCarousel) => (
          <>
            <div
              key={currCarousel.id}
              className="row-start-7 col-start-1 col-span-4 z-20 self-end ml-7  "
            >
              {currCarousel.title}
            </div>
            <div className="row-start-8 col-start-1 col-span-5 z-20 ml-7 self-center truncate">
              {currCarousel.tagline}
            </div>
          </>
        )
      )}
      <div className=" bg-gradient-to-t from-[rgba(57,57,58,1)] via-[rgba(57,57,58,0.8)] to-[rgba(57,57,58,0)] row-start-7 row-end-9 col-start-1 z-10 col-span-full rounded-b-xl" />
      <div className="my-custom-pagination-div col-start-7 row-start-8 z-10 self-center col-span-2" />
    </div>
  );
};

export default HomeCarousel;
