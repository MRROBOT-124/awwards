import { FeaturedItems } from '@/entities/featuredList';
import Link from 'next/link';
import React, {  useState } from 'react'

interface featuredSliderProps {
    slider: FeaturedItems[]
}
const featuredSlider: React.FC<featuredSliderProps> = ({ slider }) => {
    const [currentIndex, setIndex] = useState(0);

        return (
            <div className='featured featured pt-[80px]'>
                <p className="title">Coming soon</p>
                <div className="flex items-center jusitfy-between pt-6 overflow-hidden">
                    {
                        slider.map(({imageUrl, title, websiteUrl}, index) => {
                            return (
                                <Link href={websiteUrl} className="featured__slider" key={index} style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}>
                                    <img src={imageUrl} alt={title} />
                                    <p className='pt-2 text-base'>{title}</p>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-end mr-20 pt-5 featured__navigation">
                    <a href="/" className={`pr-3 ${currentIndex===0 ? 'hidden' : 'block'}`} onClick={(e) => {
                            e.preventDefault();
                            setIndex(currentIndex <= 0 ? slider.length - 1 : currentIndex-1);
                        }}>
                        <svg width="14" height="11" viewBox="0 0 14 11" >
                            <path d="M1.6282 5.31601L2.20129 5.88332L2.20127 5.88907L6.08664 9.77444L5.27172 10.5894L1.38635 6.70399L-0.000460164 5.31717L0.814456 4.50226L5.31672 -1.6281e-06L6.12471 0.813773L2.20618 4.7323L1.6282 5.31601ZM3.21672 5.60365L4.18558 4.22814L13.0313 4.19073L13.0254 5.56217L3.21672 5.60365Z"></path>
                        </svg>
                    </a>
                    <a href="/" className={`${currentIndex === slider.length - 1 ? 'hidden' : 'block'}`} onClick={(e) => {
                            e.preventDefault();
                            setIndex( currentIndex >= slider.length-1 ? 0 : currentIndex+1);
                        }}>
                        <svg width="14" height="11" viewBox="0 0 14 11" >
                            <path d="M11.403 5.27335L10.83 4.70604L10.83 4.70028L6.94461 0.814915L7.75953 0L11.6449 3.88537L13.0317 5.27218L12.2168 6.0871L7.71453 10.5894L6.90654 9.77558L10.8251 5.85706L11.403 5.27335ZM9.81453 4.9857L8.84567 6.36122L0 6.39862L0.00580048 5.02719L9.81453 4.9857Z"></path>
                        </svg>
                    </a>
                        
                </div>
            </div>
        );
}

export default featuredSlider;