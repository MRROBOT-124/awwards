import React from 'react'
import Searchbar from './searchbar';
import Wrapper from './wrapper';
import NextLink from 'next/link';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <Wrapper>
                <header className='w-full flex items-center justify-between py-2.5'>
                    {/* LOGO */}
                    <svg width="30" height="16" viewBox="0 0 30 16">
                        <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z">
                        </path>
                    </svg>
                    {/* SEARCH BAR */}
                    <Searchbar />
                    {/* BUTTONS */}
                    <a href="" className='text-sm font-normal'>Log in</a>
                    <a href="" className='text-sm font-normal'>Sign up</a>
                    <button className="btn btn--dark capitalize">be pro</button>
                    <button className="btn btn--light capitalize">submit website</button>

                </header>
            </Wrapper>
        );
}

export default Header;