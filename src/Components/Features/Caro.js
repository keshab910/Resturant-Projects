import { Carousel } from "@material-tailwind/react";
 const Caro=()=> {
  return (
       <Carousel
      autoplay={true}
      loop={true}
      transition={{ type: "tween", duration: 1 }}
      className="rounded-xl h-[700px] "
    >
      <img
        src="https://www.chaletsuisse-aruba.com/wp-content/uploads/2018/07/home-page-slider4.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://cdn.smartslider3.com/wp-content/uploads/slider/cache/ef451b69c78f3d31fece7ce910fe3a05/slide1.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="http://www.millenniumparkpanchgani.com/mobile/images/folder/slider-4.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
export default Caro