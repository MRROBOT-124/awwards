import React from 'react'
import './tags.scss';

interface tagsProps {
    text: string
    color: string
}

const tags: React.FC<tagsProps> = ({text, color}) => {
        return (
            <div className="tags uppercase text-xs font-medium" style={{borderColor: color, color: color}}>
                {text}
            </div>
        );
}


export default tags;