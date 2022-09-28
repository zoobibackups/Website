import React from 'react';
import Banner from './Components/Banner';
import Newsletter from './Components/Newsletter';
import Singleblogdetail from './Components/Singleblogdetail';

const Blogdetail = ({blogcard}) => {
    // return null
    return (
        <>
            <Banner home={"Home"} title={"Blog Detail"} liItem={"Blogs"} />
            <Singleblogdetail />
            <Newsletter />
        </>
    )
}

export default Blogdetail;