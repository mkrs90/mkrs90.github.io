


function BlogTeaser() {

    let blogTeasers = [
        { title: "Onboarding - Sprint 1", body: "First week was honestly nothing like I expected it would be. After years of traditional education...", project: '/Blog' },
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

    console.log(blogTeasers)
    const titleList = blogTeasers.map(blogTeaser => blogTeaser.title)
    console.log(titleList)

    return (
        <div className="container-fluid pt-5 pb-5" id="blogPage">
            <div id='blogHeader' className="text-center">Blog Posts</div>
                <div className="row justify-content-evenly">
                {blogTeasers.map(blogTeaser => {
                    return <BlogTeaserCard blogTeaser={blogTeaser} />
                })}
                </div>
        </div>
    )
}

export const BlogTeaserCard = ({ blogTeaser }) => {
    return (
        <div className="col-10 card m-4" id="blogCard">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body text-center">
                <h5 id="blogCardTitle" className="card-title">{blogTeaser.title}</h5>
                <p className="card-text">{blogTeaser.body}</p>
                <a href={blogTeaser.project} className="btn btn btn-primary">View Blog</a>
        </div>
    </div>
    )
}


export default BlogTeaser;