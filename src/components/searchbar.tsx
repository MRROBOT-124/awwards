"use client";

import { featuredList, featuredTags, slider } from '@/temp/data';
import React, { useState } from 'react'
import FeaturedList from './featuredList';
import FeaturedSlider from './featuredSlider';


interface SearchbarProps {
}

const Searchbar: React.FC<SearchbarProps> = ({}) => {
    const [toggle, setToggle] = useState(false);
    const [dropdown, setDropdownToggle] = useState(false);
    
        return (
            <form className={`search flex items-center flex-1 pl-5 z-20 relative ${toggle ? 'dark': ''}`} >
                {/* ICON */}
                <svg className="ico-svg" viewBox="0 0 20 20" width="20">
                    <path d="M20,8c0-4.4-3.6-8-8-8C7.6,0,4,3.6,4,8c0,1.9,0.6,3.6,1.7,4.9L0,18.6L1.4,20l7.1-7.1l-0.2-0.2 C6.9,11.6,6,9.9,6,8c0-3.3,2.7-6,6-6c3.3,0,6,2.7,6,6c0,3.3-2.7,6-6,6c-0.7,0-1.3-0.1-1.9-0.3L10,13.7l-1.5,1.5l0.4,0.2 c1,0.4,2.1,0.7,3.2,0.7C16.4,16,20,12.4,20,8z"></path>
                </svg>
                {/* INPUT */}
                <input className='flex-1 pl-3 h-[48px] text-sm font-normal self-stretch' 
                            onClick={() => setToggle(!toggle)}
                type="text" name="search" id="search"  placeholder='Search websites, elements, courses...'/>
               
                <div className="dropdown flex items-center justify-end basis-3/12 sm:flex hidden">
                     {/* TEXT */}
                    <p className='uppercase mr-9 font-light text-xs'>in</p>
                    {/* DROPDOWN */}
                    <button  className={`flex items-center h-[48px] justify-between basis-6/12 px-5 ${dropdown ? 'active': ''}`} onClick={(e) => {
                            e.preventDefault();
                            setDropdownToggle(!dropdown)
                        }
                    }>
                        <p className="capitalize text-sm font-medium">inspiration</p>
                        <svg className="dropdown__arrow ml-5" viewBox="0 0 20 20" width="12">
                            <path d="M1.6,4.1c-0.4,0-0.9,0.2-1.2,0.5c-0.7,0.7-0.7,1.7,0,2.4l8.4,8.4c0.7,0.7,1.7,0.7,2.4,0L19.5,7 c0.7-0.7,0.7-1.7,0-2.4c-0.7-0.7-1.7-0.7-2.4,0L10,11.8L2.8,4.6C2.5,4.3,2.1,4.1,1.6,4.1z"></path>
                        </svg>
                    </button>
                    {/* DROPDOWN LIST */}
                    <div className={`dropdown__list capitalize px-5 pt-2 pb-5 text-sm font-normal ${dropdown ? 'active' : ''}`}>
                        <ul>
                            <li className='pt-3'>Inspiration</li>
                            <li className='pt-3 pl-3'>websites</li>
                            <li className='pt-3 pl-3'>elements</li>
                            <li className='pt-3 pl-3'>collections</li>
                            <li className='pt-3'>blog</li>
                            <li className='pt-3'>courses</li>
                            <li className='pt-3'>directory</li>
                        </ul>
                    </div>
                </div>
                {/* SUGGESTIONS */}
                <div className="search__suggestions z-10 absolute hidden">
                    
                    <div className="grid grid-cols-2 gap-20">
                        {/* TAGS AND FEATURED LIST */}
                        <FeaturedList  featuredItems={featuredList} featuredTags={featuredTags}/>
                        {/* SLIDER FOR UPCOMING WEBSITES */}
                        <FeaturedSlider slider={slider}/>
                    </div>
                </div>
                
            </form>
            
        );
}

export default Searchbar;