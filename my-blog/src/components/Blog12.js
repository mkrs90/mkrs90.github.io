import BlogIcon from '../img/blog_icons/mtdistant.png';
import blogimg from '../img/mountain.png';

function Blog12(view) {
    
    let blogs = [
        { 
            id: 12,
            title: "Finish Line!", 
            Q1: "Describe Agile Development or a specific ceremony (stand up, retro, sprints, etc.)",
            Q2: "Convince someone who does not use frameworks why using a framework is beneficial. (Bootstrap, React, Django, or DRF)",
            Q3: "Ask instructors for permission if you are interested in writing about a different topic.",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 12;
                }).map(function (blog) {
                    return <Blog12Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog12;


export const Blog12Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Challenge of the Mountains</div>
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
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.img} alt=""/>
                <div id="blog_quote" className="col-6 pt-3">“Only those who dare to fail greatly can ever achieve greatly.”  Robert F. Kennedy</div>
            </div>
            
        </div>
        )
}