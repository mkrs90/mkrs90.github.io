import BlogIcon from '../img/blog_icons/deer.png';
import blogimg from '../img/deerImg.png';

function Blog7(view) {
    
    let blogs = [
        { 
            id: 7,
            title: "CLI - Command Line Interface", 
            Q1: "What have you learned about CLIs? Do you think they are scary?",
            A1: "Command Line Interfaces like npm are pretty cool. It's nice that you are able to type in simple commands and the computer/software is able to perform specific tasks based on that command. It can be somewhat scary to think about, there is a lot of hand waving going on behind the scenes between the command and response. So when things mess up it can be difficult knowing  what happened, what went wrong, and how do I fix it.",
            Q2: "If you were to build a CLI, what would it do?",
            A2: "One that automatically sets up your react app for github pages (gh pages) with the appropriate information so you don't have to go into package.json and enter information or remember to run the deploy command. ",
            Q3: "List some ideas that without a Framework, would take you a long time to do.",
            A3: "Anything that requires html and javascript. Being able to make things more dynamic really cuts down on the time it takes to make websites. I can only image the time it would take to make something bigger without having some sort of framework to help",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 7;
                }).map(function (blog) {
                    return <Blog7Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog7;


export const Blog7Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Joy of Hiking</div>
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
                <div id="blog_quote" className="col-6 pt-3">"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Bill Gates</div>
            </div>
            
        </div>
        )
}