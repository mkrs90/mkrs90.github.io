import bearicon from '../img/blog_icons/bearicon.png';
import blogimg from '../img/wildBear.png';

function Blog3(view) {
    
    let blogs = [
        { 
            id: 3,
            title: "HTML/CSS/JS/State", 
            Q1: "What is the number one thing that held you back this week? Why?", 
            A1: "Bootstrap. I see the possibilities with it but ultimately I find it extremely cumbersome to use. I feel like it's extremely hard to organize your ideas with bootstrap and pin point small design changes you want to make. Plus the fact that you can write all the class styles in any which order you want on a line. WHY?? If I were to go back and look at that code after a week or month I feel like I would spend another month just trying to decipher it. Anyways, Bootstrap !== myFav. (week three and I'm already making programming jokes)  ",
            Q2: "What is the one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?",
            A2: "Probably JS Data Structures, I feel like we've only scratched the surface of what JS can do. After that I was extremely interested in the idea of Atomic Design and found the way it was explained in class to be useful when breaking down webpages and seeing smaller components which made it easier to think about things. ",
            Q3: `What is your "Why"?`,
            A3: "Since I was a kid I have always loved technology but was never given the opportunity to pursue it. I found myself working for an established startup in Louisville as a manufacturing tech. a few years back that allowed me to work closely with software engineers and I was amazed by what they were able to do. During covid all my bosses were laid off and the engineers left to work safely from their homes. I had to stay at the office to do my work and ended up working long days doing engineering work for manufacturers pay. I realized just how little freedom I had and felt like I could be doing more with my life. I wanted to code and do that amazing stuff the software engineers were doing. It was a nice dream at the time but I couldn't quit my job and put my family at risk. My husband was trying to pursue his own dreams of running a startup so money was tight. In March of 2022 the new owners of company showed up and fired over half of my coworkers and told the rest of us that we may or may not have a job after september. My husband said he would put his dreams on hold for mine and found a stable job to support us. So my why? I do it for him, I do it so I can spend more time my aging/sick parents, I do it to support my family, but I do it for me most of all because I want to prove I can do it, be successful at it, and have that freedom I've always dreamed of.",
            icon: bearicon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 3;
                }).map(function (blog) {
                    return <Blog3Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog3;


export const Blog3Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">Obstacles Along the Way</div>
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
                <div id="blog_quote" className="col-6 pt-3">`Obstacles are those frightful things you see when you take your eyes off your goal.  Henry Ford.`</div>
            </div>
            
        </div>
        )
}