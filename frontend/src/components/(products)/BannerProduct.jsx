import React, { useEffect, useState } from 'react';
import image1 from '/images/banner/img1.webp';
import image2 from '/images/banner/img2.webp';
import image3 from '/images/banner/img3.jpg';
import image4 from '/images/banner/img4.jpg';
import image5 from '/images/banner/img5.webp';

import image1Mobile from '/images/banner/img1_mobile.jpg';
import image2Mobile from '/images/banner/img2_mobile.webp';
import image3Mobile from '/images/banner/img3_mobile.jpg';
import image4Mobile from '/images/banner/img4_mobile.jpg';
import image5Mobile from '/images/banner/img5_mobile.png';

import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5];

  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((preve) => preve + 1);
    }
  };

  const preveImage = () => {
    if (currentImage != 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className='container mx-auto rounded px-4'>
      <div className='relative h-56 w-full bg-slate-200 md:h-72'>
        <div className='absolute z-10 hidden h-full w-full items-center md:flex'>
          <div className='flex w-full justify-between text-2xl'>
            <button
              onClick={preveImage}
              className='rounded-full bg-white p-1 shadow-md'
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className='rounded-full bg-white p-1 shadow-md'
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/**desktop and tablet version */}
        <div className='hidden h-full w-full overflow-hidden md:flex'>
          {desktopImages.map((imageURl, index) => {
            return (
              <div
                className='h-full min-h-full w-full min-w-full transition-all'
                key={imageURl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageURl} className='h-full w-full' />
              </div>
            );
          })}
        </div>

        {/**mobile version */}
        <div className='flex h-full w-full overflow-hidden md:hidden'>
          {mobileImages.map((imageURl, index) => {
            return (
              <div
                className='h-full min-h-full w-full min-w-full transition-all'
                key={imageURl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageURl} className='h-full w-full object-cover' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
