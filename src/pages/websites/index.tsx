import Header from '@/components/header/header';
import React from 'react'
import '../../app/globals.scss'
import './websites.scss';

interface indexProps {

}

const index: React.FC<indexProps> = ({}) => {
        return (
                <>
                        <Header backgroundColor='#E9E9E9'></Header>
                </>
        );
}


export default index;