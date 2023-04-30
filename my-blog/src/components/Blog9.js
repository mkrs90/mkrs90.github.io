import BlogIcon from '../img/blog_icons/lampIcon.png';
import blogimg from '../img/nightSky.png';

function Blog9(view) {
    
    let blogs = [
        { 
            id: 9,
            title: "Python", 
            Q1: "What are some similarities and differences you can see with JS and Python?",
            A1: "All the same logic concepts are there - it's mainly just differences in syntax. Some differences were how they were viewed, python was all done in the terminal. It felt kind of weird at first compared to viewing javascript in the web console. Also, just how easy python was to read compared to javascript.",
            Q2: "If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?",
            A2: "If we had started learning Python instead of Javascript I think it things might have been easier to learn at first but the transition between python and javascript would have been more difficult since Python is so much simpler to read than javascript. I think learning javascript first is the appropriate way to go especially after learning HTML and CSS. Giving new learners the ability to visually see how their code is effecting things is a great learning tool in my experience.",
            Q3: "Think of a project or tech based tool that you use often and think about what the database structure might look like for it. Do you feel like you have a better understanding of how it works now and could you see yourself enjoying building something like that in the future?",
            A3: "I see databases almost everywhere now. From online stores, doctor offices, anything that has inventory, the list could go on and on. After this week I feel like I can see how databases store all this information and the different ways it could be broken up into different tables and how to access those databases. I could absolutely see myself enjoying building something that that in the future. I really enjoyed learning about databases and sql this week and hope to use these more while I continue on my journey of learning code. ",
            icon: BlogIcon,
            img: blogimg
        },
       
    ]
    

    
    return (
        <div id="singleBlogMainPage" className='container-fluid p-5' >
            {blogs.filter((blog) => {
                return blog.id === 9;
                }).map(function (blog) {
                    return <Blog9Card key={blog.id} blog={blog} />
                }
                )}
        </div>   
    )
}

export default Blog9;


export const Blog9Card = ({ blog }) => {
    return (
        <div className='container pt-3 ps-5 pe-5 pb-5' id='singleBlogPage'>
            <div className="text-center">
                <div id="singleBlogHeader" className="mt-1 mb-3">Journey Through Code</div>
                <div id="theTrailHead">The Path to Greatness</div>
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
                <div id="blog_quote" className="col-6 pt-3">"The night sky is a canvas of beauty, a reminder of the vastness of the universe, and a source of endless inspiration."</div>
            </div>
            
        </div>
        )
}