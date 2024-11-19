import React from 'react'
import Quote from '../assets/blockquote.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import  Navbar  from '../components/Navbar';
import  {reviews}  from '../components/reviews.js';
const Testimonial = () => {
    return (
        <>
            <Navbar />
            <section className="testimonial-container text-white h-[89vh] content-center">
                <div className="flex flex-col gap-2 items-center mb-10 mt-[-160px]">
                    <h2 className='text-4xl font-bold '>Testimonial</h2>
                    <p className='text-xl font-medium '>What members are saying.</p>
                </div>

                <div className="slider-container opacity-50">
                    <img className=" absolute top-[33%] left-[2%] lg:left-[18%] hidden md:block" src={Quote} alt="quote" />
                    <img className=" absolute top-[59%] left-[90%] lg:left-[74%] transform rotate-180 hidden md:block" src={Quote} alt="quote" />
                </div>
                <Splide options={{
                    perPage: 1,
                    autoplay: true,
                    speed: 300,
                    rewind: true,
                    rewindByDrag: true,
                }}
                className='w-[90%] md:[70%] lg:w-[60%] m-auto'>
                    {reviews.map((review) => (
                        <SplideSlide key={review.id} className='bg-gray-800 text-white rounded-[20px] gap-4 flex items-center px-3 py-2 sm:px-5 sm:py-5 md:px-10 md:py-10'>
                            <img className='w-[60%] sm:w-[40%] h-[140px] md:w-[25%] md:h-[165px] rounded-[150px]' src={review.image} alt="" />
                            <div className='content z-10 text-black flex flex-col justify-center w-[100%]'>
                                <p className='text-gray-300 text-[15px] md:text-[19px]'>{review.text}</p>

                                <div className='text-orange-400 text-lg md:text-xl'>
                                    <span>&#9733;</span>
                                    <span>&#9733;</span>
                                    <span>&#9733;</span>
                                    <span>&#9733;</span>
                                    <span>&#9733;</span>
                                </div>
                                <p  className='text-white font-bold gray-600 text-[16px] md:text-[18px]'>{review.name}</p>

                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </>
    )
}

export default Testimonial
