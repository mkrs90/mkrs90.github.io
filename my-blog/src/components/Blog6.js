import BlogIcon from '../img/blog_icons/mapIcon.png';
import blogimg from '../img/wetFeet.png';

function Blog6(view) {
    
    let blogs = [
        { 
            id: 6,
            title: "React Intro", 
            Q1: "Do you think JavaScript Frameworks and LIbraries are easy or hard to use? Why?", 
            A1: "Frameworks and libraries do tend to make things easier to use but there is definitely a learning curve to the syntax especially just coming off of learning javascript. I think with more practice they will become apart of common workflows and I will definitely appreciate them better.",
            Q2: "What Frameworks or Libraries are you interested in learning more about?",
            A2: "I don't know many at the moment. I have heard of jQuery, phaser.js, and D3 just from looking online. They might be something I look into more in the future.",
            Q3: "Find one emerging JavaScript tool that you would like to learn more about or use in your final project.",
            A3: "There are many cool emerging JavaScript tools, but one that I find particularly interesting is Vitest. Vitest is a fast, lightweight, and easy to use test framework for JavaScript. It is written in TypeScript and is compatible with React, Vue, and other popular JavaScript frameworks.",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 6;
                }).map(function (blog) {
                    return <Blog6Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog6;


export const Blog6Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Spirit of Adventure</div>
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
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q4}</h5>
                <p id="blogAnswer">{blog.A4}</p>
            </div>
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.img} alt=""/>
                <div id="blog_quote" className="col-6 pt-3">"No one is an island. We all need help sometimes." - Benjamin Franklin</div>
            </div>
            
        </div>
        )
}