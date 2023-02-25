import React from 'react'
import './website.scss'
import Tags from '../tags/tags';
import { Website } from '@/entities/website';


interface websiteProps {
    websiteDetails: Website
}

const website: React.FC<websiteProps> = ({websiteDetails}) => {
        return (
            <div className="website">
                {/* IMAGE */}
                <div className="website__img">
                    {/* IMAGE CONTENT */}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAQAAADB7vUKAAAAEUlEQVR42mNkIAAYRxXQSwEAC5oADbo22BYAAAAASUVORK5CYII=" 
                    srcSet={websiteDetails.imgSrcSet} alt={websiteDetails.companyName}/>
                    <div className="website__imgContent flex items-end justify-between">
                        <div className='flex items-center justify-between flex-1 p-5'>
                            <div className="flex items-between justify-center flex-col">
                                <small className='uppercase'>website</small>
                                <p className='text-base font-light'>{websiteDetails.name}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <svg width="14" height="14" viewBox="0 0 14 14">
                                    <path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="white" stroke="white" strokeWidth="0.542084"></path>
                                </svg>
                                <svg width="15" height="18" viewBox="0 0 15 18" className='ml-3'>
                                    <path d="M11.7746 1.00195H3.21618C1.99236 1.00195 0.996094 2.07031 0.996094 3.38268V14.6912C0.996094 15.7744 1.44566 16.5511 2.26154 16.8755C2.47384 16.9603 2.70001 17.002 2.92896 17.002C3.14403 17.002 3.36188 16.9648 3.57278 16.8889C3.78369 16.813 4.24436 16.566 4.38034 16.4916L7.4954 14.2299H7.49678L8.48611 13.5112L7.81592 13.0246L7.49401 12.7925L3.84613 15.4456C3.60608 15.575 3.30776 15.7268 3.21896 15.7595C2.95949 15.8532 2.74996 15.7982 2.64867 15.758C2.39613 15.6568 2.10614 15.4441 2.10614 14.6882V3.37971C2.10614 2.72352 2.60427 2.18934 3.21618 2.18934H11.7746C12.3865 2.18934 12.8847 2.72352 12.8847 3.37971V14.6882C12.8847 15.4441 12.5947 15.6568 12.3421 15.758C12.2408 15.7982 12.0313 15.8532 11.7718 15.7595C11.683 15.7283 11.3847 15.575 11.1447 15.4456L9.92639 14.5587L8.93707 15.2774L10.5508 16.4514L10.6118 16.4901C10.7478 16.5645 11.2085 16.8115 11.4194 16.8874C11.8523 17.0436 12.3172 17.0377 12.7306 16.874C13.5465 16.5481 13.9961 15.7729 13.9961 14.6897V3.38119C13.9947 2.0703 12.9984 1.00195 11.7746 1.00195Z" fill="white" stroke="white" strokeWidth="0.542084"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT */}
                <div className="website__content mt-1 flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <a href="/"><img src={websiteDetails.logo} alt={websiteDetails.name}/></a>
                        <p className='capitalize text-sm font-normal pl-2'>{websiteDetails.companyName}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        {
                            websiteDetails.tags.map(({name, color}, index) => {
                                return <Tags text={name} color={color} key={index}/>
                            })
                        }
                        {/* <Tags text='dev' color='#8eabc6'/>
                        <Tags text='sotd' color='#ce6644'/> */}
                    </div>
                </div>
            </div>
        );
}

export default website;