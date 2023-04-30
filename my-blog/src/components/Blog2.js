import pathicon from '../img/blog_icons/path.png';
import blogimg from '../img/path.png';

function Blog2(view) {
    
    let blogs = [
        { 
            id: 2,
            title: "Onboarding - Sprint 2", 
            Q1: "What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing user experience?", 
            A1: "I think they are the perfect trio. HTML to lay out your basic format, css to make it nice to look at and javascript to make it functional. This week really opened my eyes to the fact that you don't really need to write much html and it can all be done in JS. You can do a lot with just html and css but js really brings projects to life and provides users with a more fluid experience. ",
            Q2: "What are your thoughts on pseudocoding?",
            A2: "I never really thought about writing out logic for code before but pseudocoding is extremely useful in writing out code. I've always liked writing out problems before starting projects just to break it down into something easier for me to understand. One of my personal AHA moments this week is that pseudocoding isn't just a useful thing to do for javascript but the fact that it can be used to break down the logic of any problem and implement any code you'd like! ",
            Q3: "What was helpful during Onboarding working remotely?",
            A3: "Demo days were extremely helpful for me being remote. I know it's something perviously done in person but being remote doesn't allow for much collaboration so being able to see what others have been working on and the challenges they faced was really helpful. ",
            Q4: "What hindered your progress during Onboarding?",
            A4: "I'm a hands on learner. There is just so much coming at you during Onboarding you feel overwhelmed. It feels like you're on an island with a stack of documents and told that somewhere in these pages is the secret to get off the island, good luck! Documentation isn't all bad when you know the end goal but it really felt like I was throwing uncooked spaghetti at a wall and expecting it to stick. It wasn't until I started sandboxing as I went through the documentation that things started to make since. So really it was just trying to learn my learning process that hindered me.  ",
            Q5: "How did you overcome challenges during Onboarding? ",
            A5: "Anytime I would come across a challenge I tried to understand the root of it? I would start by asking myself questions. It always starts off with Come on really?? Why isnt this working? Well, what exactly am I trying to do? What does this function/method do? Lets just console.log everything! Sometimes it still does not work. That is when I have to tell myself to step away and come back later. And it is usually when I come back I can solve it as soon as I sit down. ",
            icon: pathicon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 2;
                }).map(function (blog) {
                    return <Blog2Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog2;


export const Blog2Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">Starting A New Path</div>
                <div id="blogTitle" className='display-5'>({blog.title})</div>
                <img id="blog1Img" src={pathicon} alt="" />
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
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.Q5}</h5>
                <p id="blogAnswer">{blog.A5}</p>
            </div>
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.img} alt=""/>
                <div id="blog_quote" className="col-6 pt-3">"Success seems to be largely a matter of hanging on when others have let go. - William Feather"</div>
            </div>
            
        </div>
        )
}