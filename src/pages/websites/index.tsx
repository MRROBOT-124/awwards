import Header from '@/components/header/header';
import React from 'react'
import '../../app/globals.scss'
import './websites.scss';
import Website from '@/components/website/website';
import Wrapper from '@/components/wrapper';
import { websites } from '@/temp/data';

interface indexProps {
}

const index: React.FC<indexProps> = ({}) => {
        return (
                <>
                        <Header searchBgColor='#E9E9E9' backgroundColor='white'></Header>
                        <div className="mt-100"></div>
                        <Wrapper>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-5 gap-y-10">
                                        {
                                                websites.map(({...props}, index) => {
                                                        return <Website websiteDetails={{
                                                                imgSrcSet: props.imgSrcSet,
                                                                name: props.name,
                                                                logo: props.logo,
                                                                companyName: props.companyName,
                                                                tags: props.tags
                                                        }} key = {index}/>
                                                })
                                        }
                                </div>
                        </Wrapper>
                </>
        );
}


export default index;