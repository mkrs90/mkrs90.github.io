import BlogIcon from '../img/blog_icons/treeIcon.png';
import blogimg from '../img/treeImg.png';

function Blog11(view) {
    
    let blogs = [
        { 
            id: 11,
            title: "Django2", 
            Q1: "After having built your first full-stack application, what things in your repertoire are a sticking point for you? Were you able to reconnect your React Restaurant to your Backend Bistro code? If so, what was that like, and if not, what hurdles did you need to jump? ",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 11;
                }).map(function (blog) {
                    return <Blog11Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog11;


export const Blog11Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">A View of the Trees</div>
                <div id="blogTitle" className='display-5'>({blog.title})</div>
                <img id="blog1Img" src={blog.icon} alt="" />
            </div>
            <div className="text-start mt-2 mb-5">
                <h5 id="blogQuestion">{blog.Q1}</h5>
                {/* <p id="blogAnswer">{blog.A1}</p> */}
            </div>
            {/* <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q2}</h5>
                <p id="blogAnswer">{blog.A2}</p>
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q3}</h5>
                <p id="blogAnswer">{blog.A3}</p>
            </div> */}
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.img} alt=""/>
                <div id="blog_quote" className="col-6 pt-3">"Make it work, make it right, make it fast." - Kent Beck</div>
            </div>
            
        </div>
        )
}