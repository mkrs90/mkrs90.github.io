import BlogIcon from '../img/blog_icons/forest.png';
import blogimg from '../img/mistyForest.png';

function Blog10(view) {
    
    let blogs = [
        { 
            id: 10,
            title: "Django1",
            Q1: "What are you struggling with the most in the Tech Stack so far and why?",
            Q2: "What companies or people (local or not) would you like to hear talk during a Bootcamp lunch and learn?", 
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 10;
                }).map(function (blog) {
                    return <Blog10Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog10;


export const Blog10Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Hiker's Way</div>
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
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.img} alt=""/>
                <div id="blog_quote" className="col-6 pt-3">"The only way to learn a new programming language is to dive in and start coding." - Eric Lippert</div>
            </div>
            
        </div>
        )
}