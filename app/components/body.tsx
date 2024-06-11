'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './Navbar.module.css';

const Body: React.FC = () => {
    const router = useRouter();
   

    const handleCardClick = (title: string) => {
        router.push(`/search-results?title=${title}`);
    };

    const linkCardsData = [
        { id: 1, image: '/iphone.png', title: 'electronics' },
        { id: 2, image: '/moda.png', title: "women's clothing" },
        { id: 3, image: '/iphone.png', title: "men's clothing" },
        { id: 4, image: '/moda.png', title: 'jewelery' },
    ];

  

    return (
        <div className='bg-olxGreen w-[100%]'>
            <div className='flex justify-center items-center h-screen'>
                <div className='block bg-white w-[80%] h-[100%]'>
                    <div className={`text-olxGreen text-4xl font-bold text-center mt-10 ${styles.link}`}>
                        Sections on the OLX service
                    </div>
                    <div className='flex flex-wrap justify-start mt-10'>
                        {linkCardsData.map(card => (
                            <div key={card.id} className='w-52 h-60 bg-white m-2 flex flex-col items-center rounded-lg overflow-hidden'
                                onClick={() => handleCardClick(card.title)}>
                                <div className="w-full h-32 bg-white ml-20 rounded-t-lg overflow-hidden">
                                    <Image 
                                        src={card.image} 
                                        alt={card.title} 
                                        width={120} 
                                        height={120} 
                                        className="object-cover"
                                    />
                                </div>
                                <div className={`text-xl ${styles.link} hover:text-white hover:bg-olxGreen text-olxGreen text-center overflow-hidden break-all mb-2 px-2`}>
                                    {card.title}
                                </div>
                            </div>
                        ))}
                    </div>
                  </div> 
            </div>
        </div>
    );
};

export default Body;
