"use client";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";

const Services = () => {
    const swiperRef = useRef(null);

    const serviceData = [
        {
            img: "/stock.jpg",
            title: "Abituriyent",
            items: [],
            message: "Hello, I’m interested in your services!"
        },
        {
            img: "/stock.jpg",
            title: "Magistratura",
            items: [],
            message: "Hello, I’m interested in your services!"
        },
        {
            img: "/stock.jpg",
            title: "Dövlət Qulluğu",
            items: [],
            message: "Hello, I’m interested in your services!"
        },
        {
            img: "/stock.jpg",
            title: "General English və IELTS",
            items: [],
            message: "Hello, I’m interested in your services!"
        },
        {
            img: "/stock.jpg",
            title: "İxtisas Seçimi",
            items: [],
            message: "Hello, I’m interested in your services!"
        },
    ];

    const handleClick = (message) => {
        const phone = "994708751147";

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp URL
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;

        // Redirect user
        window.open(url, "_blank"); // opens in new tab
    };


    return (
        <section id="xidmetler" className="container mx-auto px-4 py-12 mb-auto">
            <div className="mx-5 md:mx-10 flex sm:flex-row flex-col gap-6 md:gap-0 items-center mt-5 md:mt-10 my-20">
                <button
                    className="hidden bg-[#0168a7] text-white aspect-square rounded-full size-10 sm:flex items-center justify-center"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <Image
                        src={"arrow.svg"}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="rotate-[90deg] invert"
                    />
                </button>

                <Swiper
                    spaceBetween={5}
                    breakpoints={{
                        320: { slidesPerView: 1 }, // Mobile (small screens)
                        920: { slidesPerView: 2 }, // Tablets
                        1250: { slidesPerView: 3 }, // Small laptops
                        1600: { slidesPerView: 4 }, // Desktops (default)
                    }}
                    rewind={true}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {serviceData.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-fit h-full text-center flex flex-col items-center justify-center gap-3 mx-auto">
                                <Image
                                    width={1080}
                                    height={1350}
                                    src={service.img}
                                    alt={`Service ${index + 1}`}
                                    className="w-full max-w-[300px] h-auto object-cover"
                                />
                                <div>
                                    <p className="text-[#0168a7] font-bold text-xl">{service.title}</p>
                                    <ul className="text-[#0168a7] space-y-1">
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button onClick={() => handleClick(service.message)} className="relative w-44 h-12 p-2 bg-[#0168a7] text-white border-none rounded-full text-lg font-bold cursor-pointer z-10 overflow-hidden group">
                                    Ətraflı
                                    <span className="absolute w-48 h-32 -top-8 -left-2 bg-[#0578c0] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
                                    <span className="absolute w-48 h-32 -top-8 -left-2 bg-[#0582cf] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
                                    <span className="absolute w-48 h-32 -top-8 -left-2 bg-[#1098ec] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
                                    <span className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 group-hover:duration-1000 duration-100 transition-opacity">
                                        Ətraflı
                                    </span>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="hidden bg-[#0168a7] text-white aspect-square rounded-full size-10 sm:flex items-center justify-center"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <Image
                        src={"arrow.svg"}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="-rotate-90 invert"
                    />
                </button>
                <div className="flex sm:hidden gap-5">
                    <button
                        className="bg-[#0168a7] text-white aspect-square rounded-full size-10 flex items-center justify-center"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Image
                            src={"arrow.svg"}
                            alt="arrow"
                            width={20}
                            height={20}
                            className="rotate-[90deg] invert"
                        />
                    </button>
                    <button
                        className="bg-[#0168a7] text-white aspect-square rounded-full size-10 flex items-center justify-center"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Image
                            src={"arrow.svg"}
                            alt="arrow"
                            width={20}
                            height={20}
                            className="-rotate-90 invert"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
