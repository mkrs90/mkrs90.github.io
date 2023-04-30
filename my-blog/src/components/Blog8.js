import BlogIcon from '../img/blog_icons/streamIcon.png';
import blogimg from '../img/riverImg.png';

function Blog8(view) {
    
    let blogs = [
        { 
            id: 8,
            title: "Halfway!", 
            Q1: "Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?",
            A1: "I think my biggest hurdle so far has been learning how I learn. Towards the beginning of the bootcamp I was trying to do it all. Read all the documentation, watch all the videos, find practice examples. Ultimatly I found that I learn the most when I'm doing a project and instead of reading the documentation with no context I have a goal I'm working towards which helps concepts solidify in my brain.",
            Q2: "Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more about the technology and your limitations?",
            A2: "As I learn new things my ideas change. I've very interested in databases now as well as APIs. My first thought is doing a trail finder app, where people can find different trails to walk in their area and it give information about it as well as ability to rate them and users to join and leave comments. I still think about making a neighborhood news map where users can view a map of their city and see where news stories took place. Third project would be something along the lines of building a e-commerce website for a local business or possibly helping a local nonprofit update their website. ",
            Q3: "What surprised you about your first week in Python and how was it different from your first week in JavaScript? ",
            A3: "It surprised me how similar it was to pseudocode. Python is very easy to read and pretty straight forward. I actually found it really fun to learn. I think it helped to struggle through learning Javascript first and grasping the basic logic concepts needed to program in general but with a language that wasn't as strick as Python.",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 8;
                }).map(function (blog) {
                    return <Blog8Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog8;


export const Blog8Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Power of Nature</div>
                <div id="blogTitle" className='display-5'>({blog.title})</div>
                <img id="blog1Img" src={blog.icon} alt="" />
            </div>
            <div className="text-start mt-2 mb-5">
                <h5 id="blogQuestion">{blog.Q1}</h5>
                <p id="blogAnswer">{blog.A1}</p>
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q2}</h5>
                <p id="blogAnswer">{blog.A2}</p>
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q3}</h5>
                <p id="blogAnswer">{blog.A3}</p>
            </div>
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.img} alt=""/>
                <div id="blog_quote" className="col-6 pt-3">"Clean code always looks like it was written by someone who cares." — Robert C. Martin</div>
            </div>
            
        </div>
        )
}