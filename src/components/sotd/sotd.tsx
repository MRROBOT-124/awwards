import React from 'react'
import './sotd.scss'
import Tags from '../tags/tags'

interface sotdProps {

}

const sotd: React.FC<sotdProps> = ({}) => {
        return (
            <div className='flex items-stretch justify-between sotd mt-100'>
                <div className="sotd__img">
                    <img src="https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/01/63d2b3bf92ef5296111948.png" alt="image" />
                </div>
                <div className="sotd__content flex-1 ">
                    <div className="flex items-center justify-between">
                        <p className="uppercase">Feb 19, 2023</p>
                        <Tags color='#ce6644' text='sotd' />
                    </div>
                    <h3 className='mt-100 text-2xl font-normal'>Rejouice®</h3>
                    <div className='flex items-center'>
                        <small>by</small>
                        <a href="#" className='pl-2'><img className='circle-avatar' src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1530157/6352810469f41639199265.png" alt="avatar" /></a>
                        <a href="#" className='pl-2 font-semibold line'>REJOUICE® </a>
                        <sup> PRO</sup>
                    </div>
                    <div className="flex items-center mt-55">
                        <div className="box flex justify-center flex-col ">
                            <div className="box__upper uppercase font-light flex items-center justify-center">design</div>
                            <div className="box__lower flex items-center justify-center">7.83</div>
                        </div>
                        <div className="box flex justify-center flex-col  font-light">
                            <div className="box__upper uppercase flex items-center justify-center">usabulity</div>
                            <div className="box__lower flex items-center justify-center">7.83</div>
                        </div>
                        <div className="box flex justify-center flex-col  font-light">
                            <div className="box__upper uppercase flex items-center justify-center">creativity</div>
                            <div className="box__lower flex items-center justify-center">7.83</div>
                        </div>
                        <div className="box flex justify-center flex-col  font-light">
                            <div className="box__upper uppercase flex items-center justify-center">content</div>
                            <div className="box__lower flex items-center justify-center">7.83</div>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default sotd;