import React from 'react'

interface WrapperProps {
   children: any
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
        return (
            <div className='w-[95%] mx-auto'>
                {/* CHILD COMPONENTS */}
                {children}
            </div>
        );
}

export default Wrapper; 