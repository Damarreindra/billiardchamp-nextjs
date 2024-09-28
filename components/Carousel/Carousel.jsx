import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import Image from "next/image";

const Carousel = ({ users }) => {
  return (
    <div style={{ maxWidth: "80%", margin: "0 auto", height: "auto" }}>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        cardsEffect={{
          perSlideOffset: 10,
          perSlideRotate: 3,
          rotate: true,
       
        }}
        style={{
          width: "100%",
          height: "150px",
        }}
      >
        {users?.map((user) => (
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                height: "100%",
      
        
              }}
            >
              <>
              <Image src={user.photoUrl} width={150} height={150}/>
              <div className="flex flex-col">
              <h1 className="font-bold text-xl">{user.username}</h1>
              <p className="text-md">{user.win} Wins</p>
              </div>
              </>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
