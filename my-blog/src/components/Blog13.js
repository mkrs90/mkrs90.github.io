import BlogIcon from '../img/blog_icons/hikingIcon.png';
import blogimg from '../img/hikingImg.png';

function Blog13(view) {
    
    let blogs = [
        { 
            id: 13,
            title: "Final Project Week 1", 
            Q1: "After making it through the tech stack, where do you think your current gaps are?",
            A1: "",
            Q2: "What is your opinion on documentation? (MVP, Stories, Points, Markdown, Personas, Readme, Pseudocode, etc.)",
            A2: "I thought the documentation was extremely useful. Taking the time to work on it before the project allowed me to think some things through instead of diving in head first without knowing the overarching plan. It really could have been a disaster. I think for any major project documentation is key no mater your skill level but definitely when your first starting out and don't know exactly all the tips and tricks of the game yet. It's a very useful tool I hope to use a lot in the future.",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 13;
                }).map(function (blog) {
                    return <Blog13Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog13;


export const Blog13Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Climb to the Top</div>
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
                <div id="blog_quote" className="col-6 pt-3">“Worry never accomplishes anything. When you have a problem, it is best to concentrate on the solution to that problem, not the problem itself.”  Thomas D. Willhite</div>
            </div>
            
        </div>
        )
}