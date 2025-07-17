// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// //@ts-ignore
// import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import 'swiper/css/scrollbar';

// const Testimonials: React.FC = () => {
//     return (
//         <section id="clients" className="testimonials section " style={{ background: "linear-gradient(135deg, #e0f7fa, #e0f7fa)" }}>
//             {/* <img src="./images/testimonials-bg.jpg" className="testimonials-bg" alt="" /> */}
//             <div className="container" data-aos="fade-up" data-aos-delay="100">
//             <h1>CLIENTS</h1>
//                 <Swiper
//                     modules={[Pagination, Scrollbar, Autoplay]}
//                     spaceBetween={50}
//                     slidesPerView={5}
//                     pagination={{ clickable: true }}
//                     scrollbar={{ draggable: true }}
//                     onSwiper={(swiper) => console.log(swiper)}
//                     onSlideChange={() => console.log('slide change')}
//                     autoplay={{
//                         delay: 800,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true,
//                     }}
//                     loop={true}
//                     breakpoints={{
//                         320: {
//                           slidesPerView: 1,
//                         },
//                         480: {
//                           slidesPerView: 2,
//                         },
//                         768: {
//                           slidesPerView: 3,
//                         },
//                         1024: {
//                           slidesPerView: 4,
//                         },
//                         1200: {
//                           slidesPerView: 5,
//                         },
//                       }}
//                 >
                    
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonial-item">
//                                 <img src="https://th.bing.com/th/id/OIP.j_JTyhbZBsD9uc1MQca9RgHaEo?pid=ImgDet&w=203&h=127&c=7" className="testimonial-img" alt=""  />
//                                 <p className="pt-3">AMAZON</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonial-item">
//                                 <img src="https://th.bing.com/th/id/OIP.u7EacCFBeokY-0SfOD12lQAAAA?rs=1&pid=ImgDetMain" className="testimonial-img" alt="" />
//                                 <p className="pt-3">ACCENTURE</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonial-item">
//                                 <img src="https://www.pngall.com/wp-content/uploads/5/Reliance-Industries-Logo-Background-PNG-Image.png" className="testimonial-img" alt="" />
//                                 <p className="pt-3">RELIANCE</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonial-item">
//                                 <img src="https://specials-images.forbesimg.com/imageserve/5ada0d46a7ea432fbc1f804c/640x434.jpg?fit=scale&background=000000" className="testimonial-img" alt="" />
//                                 <p className="pt-3">CAPGEMINI</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonial-item">
//                                 <img src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png" className="testimonial-img" alt="" />
//                                 <p className="pt-3">MICROSOFT</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonial-item">
//                                 <img src="https://th.bing.com/th/id/OIP.Ri_z_xC6BJf78BLGZQx9lwHaHa?rs=1&pid=ImgDetMain" className="testimonial-img" alt="" />
//                                 <p className="pt-3">GOOGLE</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
                   
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonial-item">
//                                 <img src="https://th.bing.com/th/id/OIP.EdXCT6X7wq5_offt4nXEmgHaEK?w=2048&h=1152&rs=1&pid=ImgDetMain" className="testimonial-img" alt="" />
//                                 <p className="pt-3">WIPRO</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                         <div className="testimonial-item">
//                                 <img src="https://travancoreengg.ac.in/public_html/site_assets/upload/banner-1.png" className="testimonial-img" alt="" />
//                                 <p className="pt-3">TCS</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                         <div className="testimonial-item">
//                                 <img src="https://logodix.com/logo/86257.jpg" className="testimonial-img" alt="" />
//                                 <p className="pt-3">APPLE</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                         <div className="testimonial-item">
//                                 <img src="https://static.vecteezy.com/system/resources/previews/024/806/538/original/infosys-logo-transparent-free-png.png" className="testimonial-img" alt="" />
//                                 <p className="pt-3">INFOSYS</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="swiper-slide">
//                         <div className="testimonial-item">
//                                 <img src="https://th.bing.com/th/id/OIP.w705cNQcabNk8g3G9yyDcQHaEK?rs=1&pid=ImgDetMain" className="testimonial-img" alt="" />
//                                <p className="pt-3">IBM</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </section>
//     )
// }

// export default Testimonials;
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';

const Testimonials: React.FC = () => {
    return (
        <section
            id="clients"
            className="testimonials section"
            style={{ background: "linear-gradient(135deg, #e0f7fa, #e0f7fa)" }}
        >
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h1>CLIENTS</h1>
                <Swiper
                    modules={[Pagination, Scrollbar, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        delay: 800,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                >
                    {[
                        { img: "https://th.bing.com/th/id/OIP.j_JTyhbZBsD9uc1MQca9RgHaEo?pid=ImgDet&w=203&h=127&c=7", name: "AMAZON" },
                        { img: "https://th.bing.com/th/id/OIP.u7EacCFBeokY-0SfOD12lQAAAA?rs=1&pid=ImgDetMain", name: "ACCENTURE" },
                        { img: "https://www.pngall.com/wp-content/uploads/5/Reliance-Industries-Logo-Background-PNG-Image.png", name: "RELIANCE" },
                        { img: "https://specials-images.forbesimg.com/imageserve/5ada0d46a7ea432fbc1f804c/640x434.jpg?fit=scale&background=000000", name: "CAPGEMINI" },
                        { img: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png", name: "MICROSOFT" },
                        { img: "https://th.bing.com/th/id/OIP.Ri_z_xC6BJf78BLGZQx9lwHaHa?rs=1&pid=ImgDetMain", name: "GOOGLE" },
                        { img: "https://th.bing.com/th/id/OIP.EdXCT6X7wq5_offt4nXEmgHaEK?w=2048&h=1152&rs=1&pid=ImgDetMain", name: "WIPRO" },
                        { img: "https://travancoreengg.ac.in/public_html/site_assets/upload/banner-1.png", name: "TCS" },
                        { img: "https://logodix.com/logo/86257.jpg", name: "APPLE" },
                        { img: "https://static.vecteezy.com/system/resources/previews/024/806/538/original/infosys-logo-transparent-free-png.png", name: "INFOSYS" },
                        { img: "https://th.bing.com/th/id/OIP.w705cNQcabNk8g3G9yyDcQHaEK?rs=1&pid=ImgDetMain", name: "IBM" },
                    ].map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide">
                                <div
                                    className="testimonial-item"
                                    style={{ cursor: 'pointer', textAlign: 'center' }}
                                >
                                    <img
                                        src={client.img}
                                        className="testimonial-img"
                                        alt={client.name}
                                        style={{ maxHeight: '100px', objectFit: 'contain', margin: 'auto' }}
                                    />
                                    <p className="pt-3">{client.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
