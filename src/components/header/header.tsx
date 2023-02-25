"use client"

import React, { useState } from 'react'
import Searchbar from '../searchbar/searchbar';
import Wrapper from '../wrapper';
import './header.scss';
import Login from '../login/login'
import Register from '../register/register';


interface HeaderProps {
    backgroundColor: string,
    searchBgColor: string
}

const Header: React.FC<HeaderProps> = ({ backgroundColor, searchBgColor}) => {
        const [login, setLogin] = useState(false);
        return (
                <>
                    <header className='w-full' style={{backgroundColor: backgroundColor}}>
                        <Wrapper>
                            <div className='flex items-center justify-between py-2.5 whitespace-nowrap'>
                                {/* LOGO */}
                                <svg width="30" height="16" viewBox="0 0 30 16" className='mr-5'>
                                    <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z">
                                    </path>
                                </svg>
                                {/* SEARCH BAR */}
                                <Searchbar  backgroundColor={searchBgColor}/>
                                {/* BUTTONS */}
                                <a href="" className='text-sm font-normal ml-5 hidden sm:block' onClick={(e) => {
                                    e.preventDefault();
                                    setLogin(!login);
                                }}>Log in</a>
                                <a href="" className='text-sm font-normal ml-5 hidden sm:block'>Sign up</a>
                                <button className="btn btn--dark capitalize ml-5 lg:block hidden">be pro</button>
                                <button className="btn btn--light capitalize ml-5 lg:block hidden">submit website</button>
                                <svg className="block sm:hidden ml-5 mr-3" viewBox="0 0 20 20" width="20">
                                    <path d="M18.5,13.5L15.7,17l-1.9-1.7l-1.4,1.5l3.4,3.2l4.1-5.2L18.5,13.5z"></path>
                                    <path d="M14.2,11c-0.9-0.4-1.8-0.7-2.8-0.8c2.1-0.6,3.7-2.6,3.7-5C15.2,2.3,12.8,0,10,0C7.1,0,4.8,2.3,4.8,5.2 c0,2.3,1.6,4.3,3.7,5C3.7,10.9,0,15,0,20h2c0-4.4,3.6-8,8-8c1.3,0,2.6,0.3,3.6,0.9L14.2,11L14.2,11z M6.8,5.2C6.8,3.4,8.2,2,10,2 c1.7,0,3.2,1.4,3.2,3.2c0,1.7-1.4,3.2-3.2,3.2C8.2,8.3,6.8,6.9,6.8,5.2z"></path>
                                </svg>
                            </div>
                            
                        </Wrapper>
                    </header>
                    <Register display={login} />
                </>
        );
}

export default Header;