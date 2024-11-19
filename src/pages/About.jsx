import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import bootstrap from '../assets/bootstrap.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import next from '../assets/nextjs.webp';
import three from '../assets/three.png';
import react from '../assets/react.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Image array
const images = [
  { src: mongodb, alt: 'MongoDB' },
  { src: express, alt: 'Express' },
  { src: js, alt: 'JavaScript' },
  { src: html, alt: 'HTML' },
  { src: css, alt: 'CSS' },
  { src: bootstrap, alt: 'Bootstrap' },
  { src: node, alt: 'Node.js' },
  { src: tailwind, alt: 'Tailwind' },
  { src: next, alt: 'Next.js' },
  { src: three, alt: 'Three.js' },
  { src: react, alt: 'React' }
];

const About = () => {
  useGSAP(function(){
    gsap.from('.h1',{
      y: 40,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      stagger: 0.2
    })
  })
  const [shuffledImages, setShuffledImages] = useState(images);
  const imagesRef = useRef([]); // Refs to store image DOM elements

  // Shuffle function
  const shuffleImages = () => {
    const shuffled = [...shuffledImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    setShuffledImages(shuffled);
  };

  // GSAP animation for image shuffling
  const animateShuffle = () => {
    if (imagesRef.current.length === 0) return; // Ensure refs are set

    // Fade out all images
    gsap.to(imagesRef.current, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      onComplete: () => {
        shuffleImages(); // Shuffle the images after fade-out
        // Fade in all images after shuffle
        gsap.fromTo(
          imagesRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
        );
      }
    });
  };

  useEffect(() => {
    // Set interval to shuffle every 5 seconds
    const interval = setInterval(() => {
      animateShuffle(); // Trigger GSAP animation every 5 seconds
    }, 5000); // Changed to 5000 ms (5 seconds) for consistent timing

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [shuffledImages]); // Trigger effect when shuffledImages changes

  return (
    <div className="bg-gradient-to-r from-gray-800 to-purple-950 h-screen">
      <Navbar />
      <div className="flex justify-center lg:items-center h-[89vh]">
        <div className="flex w-[75%] h-[400px] flex-wrap lg:flex-nowrap bg-opacity-60">
          <div className="w-[80%] lg:w-[40%] px-0 py-5 lg:px-5 lg:py-5 mx-10 rounded-[5px]">
            <p className="h1 text-[42px] text-white font-bold mb-1 md:mb-4">My <span className='text-red-500'>Expertise</span></p>
            <p className="h1 text-sm leading-6 text-white font-medium">
              As a MERN Stack Developer with 2 years of experience, I offer a wide range of services that help businesses and individuals bring their ideas to life through powerful web applications. Below are some of the key services I provide:
            </p>
          </div>
          <div className="flex w-[100%] lg:w-[60%] h-[340px] justify-center items-center gap-5 flex-wrap">
            {shuffledImages.map((image, index) => (
              <div
                key={index}
                ref={(el) => (imagesRef.current[index] = el)} // Assign refs to each image container
                className="w-[20%] md:w-[18%] h-[30%] md:h-[35%] px-1 md:px-2 py-4 bg-black rounded-[10px] border-[3px] border-gray-600"
              >
                <img
                  src={image.src}
                  className="w-[90%] m-auto h-[100%]"
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;