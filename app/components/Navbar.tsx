"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FileUploadWindow from './FileUploadWindow';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);

  const handleUploadClick = () => {
    setShowFileUpload(true);
  };

  return (
    <nav className="bg-olxGreen border-b border-gray-300 h-[13vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-full items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center mr-4">
              <a href="#" className={`flex items-center ${styles.logo}`}>
                <Image 
                  src="/olx-logo.png" 
                  alt="OLX Logo" 
                  width={95} 
                  height={150} 
                  className="h-auto"
                />
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 ">
            <div className="flex items-center ">
              <div className={`flex-shrink-0 flex items-center  text-white ${styles.link} `}> 
                <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mr-10 text-white mr-40" />
                <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-2" />
                
                <Link href="/profile">
                  <span>Ваш профиль</span>
                </Link>
              </div>
            </div>
            <div>
              <button onClick={handleUploadClick} className={`bg-white text-olxGreen px-4 py-2 rounded-md font-bold hover:bg-olxGreen hover:border-2 hover:text-white ml-4 ${styles.link}`}>
                Подать объявление
              </button>
            </div>
          </div>
        </div>
      </div>
      {showFileUpload && <FileUploadWindow setShowFileUpload={setShowFileUpload} />}
    </nav>
  );
}

export default Navbar;
