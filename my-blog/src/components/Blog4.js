import BlogIcon from '../img/blog_icons/campsignIcon.png';
import blogimg from '../img/mossyStream.png';

function Blog4(view) {
    
    let blogs = [
        { 
            id: 4,
            title: "Vanilla JS", 
            Q1: "What did you learn about that helped you understand the development process?", 
            A1: "With this weeks weather app project it really helped me understand the importance of structuring code. JS is super strict when it comes to reading the code from top to bottom and adding an API complicates that. So you really have to think about how to organize your code for everything to work correctly. I'm also learning the importance of pseudocode and what an important part it plays in the development process. Really spending that time up front working through the logic of what you're trying to accomplish really sets the tone for the rest of the project. It's one of the things I really want to work on and get better at.",
            Q2: "What does it mean to develope good code?",
            A2: "Code should be DRY - don't repeat yourself, logical, and commented well. I believe these are the key factors that go into developing good code. A lot of this can be accomplished by planning out your course of action through pseudocoding before you even start typing code.",
            Q3: "What does it mean to be a good developer?",
            A3: "I think the willingness to learn makes a good developer. There is just so much out there and it's constantly changing. You have to be willing to let your egos go and go out and learn by either reading up on documentation, googling solutions, or talking with others.",
            Q4: "What is one thing that programmers hate doing?",
            A4: "I'm not sure if it's all programmers but for me personally it's coming back to code that was not commented on or poorly named. It takes a long time to understand what's going on or what your past self was thinking. Especially with learning code so quickly it's difficult to remember why things were being done a certain way - did I now know this at the time? How much does this effect? What does it even do?",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 4;
                }).map(function (blog) {
                    return <Blog4Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog4;


export const Blog4Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Freedom of the Trail</div>
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
                <div id="blog_quote" className="col-6 pt-3">`Being challenged in life is inevitable, being defeated is optional.  Roger Crawford`</div>
            </div>
            
        </div>
        )
}