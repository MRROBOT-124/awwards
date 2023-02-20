import React from 'react'
import Sotd from '../sotd/sotd';

interface latestSOTDProps {

}

const latestSOTD: React.FC<latestSOTDProps> = ({}) => {
        return (
            <div className='grid grid-cols-2 auto-rows-auto'>
                <Sotd></Sotd>
                <Sotd></Sotd>
            </div>
        );
}

export default latestSOTD;