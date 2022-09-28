import React from 'react';
import { Link } from "react-router-dom";
import { BlogContent } from './Blogdata';

function Blogbox({id, blogimg, item,blogdes, blogheading, bloglink}) {
    return (
        <>
            <div className="blog-list-single-item" >
                <Link state={item} to={bloglink} className="image"><img src={blogimg} alt="" /></Link>
                <div className="content">
                    <span className="author">By<Link to={bloglink} state={item} >Admin</Link></span>
                    <h5 className="title"><Link state={item} to={bloglink}>{blogheading}</Link></h5>
                    <p>{blogdes}</p>

                    <div className="post-info">
                        <span>27 April, 2021</span>
                        <span>15 min read</span>
                    </div>
                </div>
            </div>
        </>
    )
}

const Blogdata = () => {

    const Blogs = BlogContent.map((blogcard, i) => {
        return (
            <Blogbox
                id={blogcard.id}
                blogimg={blogcard.blogimg}
                item={blogcard}
                blogdes={blogcard.blogdes}

                blogheading={blogcard.blogheading}

                bloglink={blogcard.bloglink}
            />
        )
    })

    return (
        <>
            {Blogs}
        </>
    )
}

export default Blogdata;