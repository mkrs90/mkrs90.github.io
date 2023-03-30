

function BlogTeaser() {

    let blogs = [
        { title: "Onboarding - Sprint 1", body: "First week was honestly nothing like I expected it would be. After years of traditional education..." },
        { title: "Onboarding - Sprint 2", body: "I think they are the perfect trio. HTML to lay out your basic format, css to make it nice to look at and javascript..." },
        { title: "HTML/CSS/JS/State", body: "What is the number one thing that held you back this week? Why? Bootstrap. I see the possibilities with it but..." },
        { title: "Vanilla JS", body: "What did you learn about that helped you understand the development process? With this weeks weather app project it really helped me understand..." },
        { title: "Technical Article", body: "What is Pseudocode and how does it help with programming? There are very few people who can pick up..." },
        { title: "React Intro", body: "Do you think JavaScript Frameworks and LIbraries are easy or hard to use? Why? Frameworks and libraries do tend to make things easier..." },
        { title: "CLI", body: "What have you learned about CLIs? Do you think they are scary? Command Line Interfaces like npm are pretty cool..." },
        { title: "Halfway!", body: "Coming Soon!" },
        { title: "Python", body: "Coming Soon!" },
        { title: "Django 1", body: "Coming Soon!" },
        { title: "Django 2", body: "Coming Soon!" },
        { title: "Finish Line!", body: "Coming Soon!" },
        { title: "Final Project 1", body: "Coming Soon!" },
        { title: "Final Project 2", body: "Coming Soon!" },
    ]

    console.log(blogs)
    const titleList = blogs.map(blog => blog.title)
    console.log(titleList)

    return (
        <div className="container">
            {blogs.map(blog => {
                return <BlogCard blog={blog} />
            })}

        </div>
    )
}

export const BlogCard = ({ blog }) => {
    return (
        <div className="mt-5">
            <div className="card mb-3 text-center">
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.body}</p>
                    <button type="button" className="btn btn btn-outline-success">View Blog</button>
                </div>
            </div>
        </div>
    )
}


export default BlogTeaser;