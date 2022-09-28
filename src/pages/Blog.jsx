import React from 'react';
import Banner from './Components/Banner';
import Singleblog from './Components/Singleblog';
import Newsletter from './Components/Newsletter';

function Blog() {
    return (
        <>
            <Banner home={"Home"} title={"Latest News"} liItem={"Blogs"} />
            <Singleblog />
            <Newsletter />
        </>
    )
}

export default Blog;