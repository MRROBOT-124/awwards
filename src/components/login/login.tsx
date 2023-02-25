import React from 'react'
import './login.scss'

interface loginProps {
    display: boolean
}

const login: React.FC<loginProps> = ({display}) => {
        
        return (
            <div className={`login items-center justify-center ${display? 'show' : ''}`} >
                <div className="login__container grid grid-cols-2">
                    <div className="login__left flex items-center justify-between flex-col">
                        <h1 className='self-start'>Welcome!</h1>
                        <div className="flex items-center justify-between">
                            <svg width="30" height="16" viewBox="0 0 30 16" className='logo'><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path></svg>
                            <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M81.09 162.18C125.875 162.18 162.18 125.875 162.18 81.09C162.18 36.3052 125.875 0 81.09 0C36.3053 0 0 36.3052 0 81.09C0 125.875 36.3053 162.18 81.09 162.18Z" fill="#AAEEC4"></path>
                                <path d="M81.0906 147.041C117.514 147.041 147.041 117.514 147.041 81.0906C147.041 44.6674 117.514 15.1406 81.0906 15.1406C44.6675 15.1406 15.1406 44.6674 15.1406 81.0906C15.1406 117.514 44.6675 147.041 81.0906 147.041Z" stroke="#502BD8" strokeWidth="8" strokeMiterlimit="1.2"></path>
                                <path d="M103.819 78.3292C108.906 78.3292 113.029 74.1028 113.029 68.8892C113.029 63.6757 108.906 59.4492 103.819 59.4492C98.7329 59.4492 94.6094 63.6757 94.6094 68.8892C94.6094 74.1028 98.7329 78.3292 103.819 78.3292Z" fill="#502BD8"></path>
                                <path d="M58.3662 78.3292C63.4528 78.3292 67.5762 74.1028 67.5762 68.8892C67.5762 63.6757 63.4528 59.4492 58.3662 59.4492C53.2797 59.4492 49.1562 63.6757 49.1562 68.8892C49.1562 74.1028 53.2797 78.3292 58.3662 78.3292Z" fill="#502BD8"></path>
                                <path d="M48.8438 94.8906C52.3937 109.411 65.4838 120.181 81.0938 120.181C96.7037 120.181 109.794 109.411 113.344 94.8906" stroke="#502BD8" strokeWidth="8" strokeMiterlimit="1.2"></path>
                            </svg>
                        </div>
                        <p className='self-start text-base font-light'>Not a member yet? <a href="#" className='mt-5 link text-base font-normal'>Register now</a></p>
                    </div>
                    <div className="login__right">
                        <form action="" className='flex flex-col'>
                            <h1 className='text-2xl font-bold'>Log in</h1>
                            <label htmlFor="email" className="uppercase mt-10 text-xs">Email or username</label>
                            <input type="text" name="email" id="email" placeholder='Email or username' className='text-base'/>
                            <label htmlFor="password" className="uppercase  mt-10 text-xs ">password</label>
                            <input type="password" name="password" id="password" placeholder='passsword' className='text-base' />
                            <div className="flex items-center mt-5">
                                <input type="checkbox" id="session" name="session" value="session" />
                                <label htmlFor="session" className='checkbox text-base font-light'>Keep me logged in</label>
                            </div>
                            <button type="submit" className='text-xl font-normal mt-10'>Log in now</button>
                            <div className="flex items-center justify-end">
                                <a href="" className='mt-5 link text-xs font-light'>Forgot your password?</a>
                            </div>
                        </form>

                        <p className='mt-10 font-light text-base'>Or sign in with</p>
                        <div className="flex items-center justify-between mt-5">
                            <a className="flex items-center justify-center socials">
                                <svg className='mr-2' viewBox="0 0 20 20" width="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.6,8.1c-3.1,0-6.3,0-9.4,0c0,1.3,0,2.6,0,3.9c1.8,0,3.6,0,5.4,0c-0.2,1.2-1,2.4-2,3.1c-0.7,0.4-1.4,0.7-2.2,0.9 c-0.8,0.1-1.6,0.2-2.4,0c-0.8-0.2-1.6-0.5-2.2-1c-1.1-0.7-1.9-1.8-2.3-3.1c-0.4-1.3-0.4-2.6,0-3.9C4.8,7.2,5.3,6.4,6,5.7 C6.8,4.9,7.9,4.3,9,4c1-0.2,2-0.2,2.9,0.1c0.8,0.2,1.5,0.7,2.2,1.3c0.6-0.6,1.2-1.2,1.8-1.8c0.3-0.3,0.7-0.6,1-1 c-0.9-0.9-2-1.6-3.2-2c-2.1-0.8-4.6-0.8-6.7-0.1c-2.4,0.8-4.5,2.7-5.7,5C0.9,6.3,0.6,7.2,0.4,8c-0.4,2.2-0.1,4.5,0.9,6.5 c0.7,1.3,1.6,2.4,2.7,3.3c1.1,0.9,2.3,1.5,3.6,1.8c1.7,0.4,3.4,0.4,5.1,0.1c1.5-0.3,2.9-1.1,4.1-2.1c1.2-1.1,2.1-2.6,2.5-4.2 C19.9,11.7,19.9,9.9,19.6,8.1z"></path>
                                </svg>
                                Google
                            </a>
                            <a className="flex items-center justify-center socials">
                                <svg className='mr-2' viewBox="0 0 20 20" width="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.58 6.527h-3.12V4.481c0-.768.51-.947.868-.947h2.201V.157L11.498.145c-3.365 0-4.131 2.519-4.131 4.13v2.252H5.42v3.48h1.946v9.848h4.093v-9.848h2.762l.357-3.48z"></path>
                                </svg>
                                Facebook
                            </a>
                            <a className="flex items-center justify-center socials">
                                <svg className='mr-2' viewBox="0 0 20 20" width="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.86 3.884a8.05 8.05 0 0 1-2.323.637 4.053 4.053 0 0 0 1.779-2.239 8.1 8.1 0 0 1-2.57.983 4.046 4.046 0 0 0-6.894 3.69 11.488 11.488 0 0 1-8.34-4.228 4.025 4.025 0 0 0-.547 2.035c0 1.403.714 2.642 1.8 3.367a4.034 4.034 0 0 1-1.833-.506v.051a4.05 4.05 0 0 0 3.246 3.967 4.068 4.068 0 0 1-1.828.07 4.05 4.05 0 0 0 3.78 2.809 8.117 8.117 0 0 1-5.99 1.675 11.45 11.45 0 0 0 6.202 1.818c7.442 0 11.511-6.165 11.511-11.511 0-.176-.003-.35-.011-.524a8.195 8.195 0 0 0 2.018-2.094z"></path>
                                </svg>
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default login;