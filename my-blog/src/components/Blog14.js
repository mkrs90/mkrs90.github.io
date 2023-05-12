import BlogIcon from '../img/blog_icons/finishIcon.png';
import blogimg from '../img/madeIt.png';

function Blog14(view) {
    
    let blogs = [
        { 
            id: 14,
            title: "Final Project Week 2", 
            Q1: "What was your experience like overall in the Bootcamp?",
            A1: "It was an amazing experience. I honestly don't think I could have learned all of this on my own. It was over to soon in my opinion as I feel like there is so much more to learn but I also understand that the majority of learning and experience will come with landing that first software job.",
            Q2: "Take a look back at your blog posts over the last 16 weeks. Where do you see yourself growing the most? What is one thing that pops out as you being misinformed or that you think is funny compared to what you know now?",
            A2: "They always say hindsight is 20/20 and it couldn't be more true here. I was so intimidated by code at first. 16 weeks ago the thought of learning multiple software languages during the course of this boot camp seemed extremely daunting. Then we found out that yeah, you actually be learning one language per week. It's crazy to me that I went through that. I can see myself growing throughout each week and each blog post. What an amazing experience this has been.",
            Q3: "If someone important was to read this blog, who would flatter you the most? Make sure your final portfolio, blog, homepage, final project, and whatever else is online and linked so future employers can learn about everything you did! Be sure to post the live link to social media and share it with your peers, friends, and family!",
            A3: "Honestly, my husband, Nathan. He has always believed in me and gave me the opportunity and confidence to take this risk of changing the direction my life was going and I'm excited to continue down this path with him by my side. Thank you, Nathan! ",
            Q4: "Will you continue this blog throughout the rest of post-work? How about for the rest of the year? How about the rest of your life? Will you keep posting? Will you need to be stopped?",
            A4: "I really want to try and keep up with it. I'm sure life will get in the way eventually but I love looking back and seeing how far I've come. I'll probably try and at least post once a year or after major events happened, like landing a software job or learning a new language. I'm excited to see what the future hold for me. Thanks for reading!",
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