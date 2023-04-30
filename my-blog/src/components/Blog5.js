import BlogIcon from '../img/blog_icons/campsiteIcon.png';
import blogimg from '../img/campingNight.png';

function Blog5(view) {
    
    let blogs = [
        { 
            id: 5,
            title: "Technical Article", 
            Q1: "What is Pseudocode and how does it help with programming?", 
            A1: `Pseudocode is a high-level programming language that is used to describe the logic of an algorithm without worrying about the specific syntax of a particular programming language. It can be a useful tool for planning and designing programs, as it can help you to think through the steps involved in the program and identify any potential problems.

            How does Pseudocode help with programming?
            
            Pseudocode can help with programming in a number of ways:
            
            It can help you to think through the logic of your program before you start coding. This can help you to identify any potential problems and make sure that your program is well-designed.
            It can help you to communicate your ideas to other programmers. Pseudocode is a human-readable language, so it is easy for other people to understand what you are trying to do.
            It can help you to debug your programs. If your program is not working as expected, you can use pseudocode to help you to identify the problem.
            
            Pseudocode can be compared to a map for a hike. Just as a map helps you to plan your hike and identify potential problems, pseudocode can help you to plan your program and identify potential problems.
            
            For example, if you are planning a hike, you might use a map to identify the trail you want to take, the distance you want to hike, and the elevation gain. You might also use the map to identify potential problems, such as dangerous terrain or difficult sections of the trail.
            
            Similarly, if you are planning a program, you might use pseudocode to identify the steps you want your program to take, the data you need to input, and the output you want your program to generate. You might also use pseudocode to identify potential problems, such as errors in the logic of your program or unexpected input.
            
            By using pseudocode, you can plan your program more effectively and identify potential problems before you start coding. This can save you time and frustration in the long run.",
            `,
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 5;
                }).map(function (blog) {
                    return <Blog5Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog5;


export const Blog5Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Peace of the Woods</div>
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
                <div id="blog_quote" className="col-6 pt-3">“Our very survival depends on our ability to stay awake, to adjust to new ideas, to remain vigilant and to face the challenge of change."  Martin Luther King Jr.</div>
            </div>
            
        </div>
        )
}