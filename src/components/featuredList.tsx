import { FeaturedItems } from '@/entities/featuredList';
import { Tags } from '@/entities/tags';
import Link from 'next/link';
import React from 'react'

interface featuredListProps {
    featuredItems: FeaturedItems[],
    featuredTags: Tags[]
}

const featuredList: React.FC<featuredListProps> = ({featuredItems, featuredTags}) => {
        return (
            <div className='featured pt-[80px] pl-12'>
                <p className="title">featured in Awwwards</p>
                <div className="flex items-center justify-between pt-4">
                    {
                        featuredItems.map(({imageUrl, title, websiteUrl}, index) => {
                            return (
                                <Link href={websiteUrl} className="featured__list" key={index}>
                                    <img src={imageUrl} alt="Site of the day" />
                                    <p className='pt-2'>{title}</p>
                                </Link>
                            )
                        })
                    }
                    
                </div>
                <p className="title pt-[40px] capitalize">best tags</p>
                <div className="flex items-center pt-4">
                    {
                        featuredTags.map(({name, route}, index) => {
                            return (
                                <Link href={route} className="featured__tags text-base" key={index}>
                                    {name}
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        );
}

export default featuredList;