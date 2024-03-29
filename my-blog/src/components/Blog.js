import bobrossimg from '../img/bob-ross-img.png';
import trailheadimg from '../img/blog_icons/trailhead.png';

function Blog(view) {
    
    let blogs = [
        {   
            id: 1,
            title: "Onboarding - Sprint 1",
            question1: "Was your first week what you expected? Why? Why not?", 
            answer1: "First week was honestly nothing like I expected it would be. After years of traditional education style where you listen to a guided lesson on material then try and achieve high grades and memorize every little detail especially with my history degree since it was all about memorization. The way the camp has gone this first week is almost a nice breather from that. You're on your own code learning path guided by both instructors and peers.",
            question2: "What are you excited or eager to learn more about?",
            answer2: "I'm excited to learn more about javascript. I find it extremely interesting and such a powerful tool. We've only touched on it just a few times within this first week but I'm excited nonetheless.",
            question3: "What is something about you that can only be learned by reading this blog? ",
            answer3: "Here's a tidbit not a lot of people know - I actually have a degree in History with a focus on Russian Studies. I also love being creative! One of my favorite things to do is to paint. When I was a kid I loved watching Bob Ross which really inspired me to just create without worry of mistakes. I also love to hike the trials around Louisville as well as garden. My favorite season is summer!",
            blogImg: bobrossimg,
            imgAlt: "Bob Ross and Happy Trees"
        },
        { title: "Onboarding - Sprint 2", body: "I think they are the perfect trio. HTML to lay out your basic format, css to make it nice to look at and javascript...", project: '/' },
        { title: "HTML/CSS/JS/State", body: "What is the number one thing that held you back this week? Why? Bootstrap. I see the possibilities with it but...", project: '/' },
        { title: "Vanilla JS", body: "What did you learn about that helped you understand the development process? With this weeks weather app project it really helped me understand...", project: '/' },
        { title: "Technical Article", body: "What is Pseudocode and how does it help with programming? There are very few people who can pick up...", project: '/' },
        { title: "React Intro", body: "Do you think JavaScript Frameworks and LIbraries are easy or hard to use? Why? Frameworks and libraries do tend to make things easier...", project: '/' },
        { title: "CLI", body: "What have you learned about CLIs? Do you think they are scary? Command Line Interfaces like npm are pretty cool...", project: '/' },
        { title: "Halfway!", body: "Now that you are halfway through boot camp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next...", project: '/' },
        { title: "Python", body: "What are some similarities and differences you can see with JS and Python? All the same logic concepts are there - it's mainly just differences in...", project: '/' },
        { title: "Django 1", body: "Coming Soon!", project: '/' },
        { title: "Django 2", body: "Coming Soon!", project: '/' },
        { title: "Finish Line!", body: "Coming Soon!", project: '/' },
        { title: "Final Project 1", body: "Coming Soon!", project: '/' },
        { title: "Final Project 2", body: "Coming Soon!", project: '/' },
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 1;
                }).map(function (blog) {
                    return <BlogCard key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog


export const BlogCard = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Trail Head</div>
                <div id="blogTitle" className='display-5'>({blog.title})</div>
                <img id="blog1Img" src={trailheadimg} alt="trailhead" />
            </div>
            <div className="text-start mt-2 mb-5">
                <h5 id="blogQuestion">{blog.question1}</h5>
                <p id="blogAnswer">{blog.answer1}</p>
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.question2}</h5>
                <p id="blogAnswer">{blog.answer2}</p>
            </div>
            <div className="text-start mt-5 mb-5">
                <h5 id="blogQuestion">{blog.question3}</h5>
                <p id="blogAnswer">{blog.answer3}</p>
            </div>
            <div id="bobrossDiv" className="row">
                <img className="col-6" src={blog.blogImg} alt={blog.imgAlt}/>
                <div id="bobrossQuote" className="col-6 pt-3">"Just let go - and fall like a little waterfall"</div>
            </div>
            
        </div>
        )
}