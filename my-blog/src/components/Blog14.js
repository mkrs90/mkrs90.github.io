import BlogIcon from '../img/blog_icons/finishIcon.png';
import blogimg from '../img/madeIt.png';

function Blog14(view) {
    
    let blogs = [
        { 
            id: 14,
            title: "Final Project Week 2", 
            Q1: "What was your experience like overall in the Bootcamp?",
            Q2: "Take a look back at your blog posts over the last 16 weeks. Where do you see yourself growing the most? What is one thing that pops out as you being misinformed or that you think is funny compared to what you know now?",
            Q3: "If someone important was to read this blog, who would flatter you the most? Make sure your final portfolio, blog, homepage, final project, and whatever else is online and linked so future employers can learn about everything you did! Be sure to post the live link to social media and share it with your peers, friends, and family!",
            Q4: "Will you continue this blog throughout the rest of post-work? How about for the rest of the year? How about the rest of your life? Will you keep posting? Will you need to be stopped?",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 14;
                }).map(function (blog) {
                    return <Blog14Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog14;


export const Blog14Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Summit of Success</div>
                <div id="blogTitle" className='display-5'>({blog.title})</div>
                <img id="blog1Img" src={blog.icon} alt="" />
            </div>
            <div className="text-start mt-2 mb-5">
                <h5 id="blogQuestion">{blog.Q1}</h5>
                {/* <p id="blogAnswer">{blog.A1}</p> */}
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q2}</h5>
                {/* <p id="blogAnswer">{blog.A2}</p> */}
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q3}</h5>
                {/* <p id="blogAnswer">{blog.A3}</p> */}
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q4}</h5>
                {/* <p id="blogAnswer">{blog.A3}</p> */}
            </div>
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.img} alt=""/>
                <div id="blog_quote" className="col-6 pt-3">"The journey of a thousand miles begins with a single step." - Lao Tzu</div>
            </div>
            
        </div>
        )
}