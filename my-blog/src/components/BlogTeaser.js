import pathImg from "../img/path.png";
import trailsign from "../img/blog_icons/trailhead.png";
import bearicon from "../img/blog_icons/bearicon.png";
import campsignicon from "../img/blog_icons/campsignIcon.png";
import campsiteicon from "../img/blog_icons/campsiteIcon.png";
import finishicon from "../img/blog_icons/finishIcon.png";
import hikingicon from "../img/blog_icons/hikingIcon.png";
import lampicon from "../img/blog_icons/lampIcon.png";
import mapicon from "../img/blog_icons/mapIcon.png";
import streamicon from "../img/blog_icons/streamIcon.png";
import treeicon from "../img/blog_icons/treeIcon.png";
import deericon from "../img/blog_icons/deer.png";
import foresticon from "../img/blog_icons/forest.png";
import mtdistanticon from "../img/blog_icons/mtdistant.png";
import pathicon from "../img/blog_icons/path.png";

function BlogTeaser() {
  let blogTeasers = [
    {
      title: "Onboarding - Sprint 1",
      body: "First week was honestly nothing like I expected it would be. After years of traditional education...",
      project: "/Blog",
      img: pathImg,
      icon: trailsign
    },
    {
      title: "Onboarding - Sprint 2",
      body: "I think they are the perfect trio. HTML to lay out your basic format, css to make it nice to look at and javascript...",
      project: "/Blog2",
      img: pathImg,
      icon: pathicon
    },
    {
      title: "HTML/CSS/JS/State",
      body: "What is the number one thing that held you back this week? Why? Bootstrap. I see the possibilities with it but...",
      project: "/",
      img: "",
      icon: bearicon
    },
    {
      title: "Vanilla JS",
      body: "What did you learn about that helped you understand the development process? With this weeks weather app project it really helped me understand...",
      project: "/",
      img: "",
      icon: campsignicon
    },
    {
      title: "Technical Article",
      body: "What is Pseudocode and how does it help with programming? There are very few people who can pick up...",
      project: "/",
      img: "",
      icon: campsiteicon
    },
    {
      title: "React Intro",
      body: "Do you think JavaScript Frameworks and LIbraries are easy or hard to use? Why? Frameworks and libraries do tend to make things easier...",
      project: "/",
      img: "",
      icon: mapicon
    },
    {
      title: "CLI",
      body: "What have you learned about CLIs? Do you think they are scary? Command Line Interfaces like npm are pretty cool...",
      project: "/",
      img: "",
      icon: deericon
    },
    {
      title: "Halfway!",
      body: "Now that you are halfway through boot camp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next...",
      project: "/",
      img: "",
      icon: streamicon
    },
    {
      title: "Python",
      body: "What are some similarities and differences you can see with JS and Python? All the same logic concepts are there - it's mainly just differences in...",
      project: "/",
      img: "",
      icon: lampicon
    },
    { title: "Django 1",
      body: "Coming Soon!",
      project: "/",
      img: "",
      icon: foresticon
    },
    { title: "Django 2",
      body: "Coming Soon!",
      project: "/",
      img: "",
      icon: treeicon
    },
    { title: "Finish Line!", body: "Coming Soon!", project: "/", img: "",
    icon: mtdistanticon },
    { title: "Final Project 1", body: "Coming Soon!", project: "/",img: "",
    icon: hikingicon },
    { title: "Final Project 2", body: "Coming Soon!", project: "/", img: "", icon: finishicon },
  ];

  console.log(blogTeasers);
  const titleList = blogTeasers.map((blogTeaser) => blogTeaser.title);
  console.log(titleList);

  return (
    <div className="profile-area container-fluid text-center" id="blogPage">
      <div className="container p-3 ps-5 pe-5" id="blogTeaser_container">
        <div id="blogHeader">Blog Posts</div>
        <div className="row justify-content-evenly">
          {blogTeasers.map((blogTeaser) => {
            return <BlogTeaserCard blogTeaser={blogTeaser} />;
          })}
        </div>
      </div>
    </div>
  );
}

export const BlogTeaserCard = ({ blogTeaser }) => {
  return (
      <div className="col-md-4">
        <div className="card m-4">
          <div className="img1"><img src={blogTeaser.img} alt="" />
          <a href={blogTeaser.project}>
            <div className="img2"><img src={blogTeaser.icon} alt="" /></div></a>
          <div className="main-text">
            <h2>{blogTeaser.title}</h2>
            <p>{blogTeaser.body}</p>
          </div>
          </div>
        </div>
      </div>
    
      );
};

     {/* <div className="col-4 card m-4" id="blogCard">
    //   {/* <img src="..." className="card-img-top" alt="..."/> 
    //   <div className="card-body text-center">
    //     <h5 id="blogCardTitle" className="card-title">
    //       {blogTeaser.title}
    //     </h5>
    //     <p className="card-text">{blogTeaser.body}</p>
    //     <a href={blogTeaser.project} className="btn btn btn-primary">
    //       View Blog
    //     </a>
    //   </div>
    // </div> */}


export default BlogTeaser;