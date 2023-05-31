import blogImg1 from "../img/bobRossSqr.png";
import blogImg2 from "../img/path.png";
import blogImg3 from "../img/wildBear.png";
import blogImg4 from "../img/mossyStream.png";
import blogImg5 from "../img/campingNight.png";
import blogImg6 from "../img/wetFeet.png";
import blogImg7 from "../img/deerImg.png";
import blogImg8 from "../img/riverImg.png";
import blogImg9 from "../img/nightSky.png";
import blogImg10 from "../img/mistyForest.png";
import blogImg11 from "../img/treeImg.png";
import blogImg12 from "../img/mountain.png";
import blogImg13 from "../img/hikingImg.png";
import blogImg14 from "../img/madeIt.png";
import blogImg15 from "../img/sapling_image.jpg";
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
import saplingicon from "../img/blog_icons/sapling.png";

function BlogTeaser() {
  let blogTeasers = [
    {
      title: "Onboarding - Sprint 1",
      body: "First week was honestly nothing like I expected it would be. After years of traditional education...",
      project: "/Blog",
      img: blogImg1,
      icon: trailsign,
    },
    {
      title: "Onboarding - Sprint 2",
      body: "I think they are the perfect trio. HTML to lay out your basic format, css to make it nice to look at and javascript...",
      project: "/Blog2",
      img: blogImg2,
      icon: pathicon,
    },
    {
      title: "HTML/CSS/JS/State",
      body: "What is the number one thing that held you back this week? Why? Bootstrap. I see the possibilities with it but...",
      project: "/Blog3",
      img: blogImg3,
      icon: bearicon,
    },
    {
      title: "Vanilla JS",
      body: "What did you learn about that helped you understand the development process? With this weeks weather app project it really helped me understand...",
      project: "/Blog4",
      img: blogImg4,
      icon: campsignicon,
    },
    {
      title: "Technical Article",
      body: "What is Pseudocode and how does it help with programming? There are very few people who can pick up...",
      project: "/Blog5",
      img: blogImg5,
      icon: campsiteicon,
    },
    {
      title: "React Intro",
      body: "Do you think JavaScript Frameworks and LIbraries are easy or hard to use? Why? Frameworks and libraries do tend to make things easier...",
      project: "/Blog6",
      img: blogImg6,
      icon: mapicon,
    },
    {
      title: "CLI",
      body: "What have you learned about CLIs? Do you think they are scary? Command Line Interfaces like npm are pretty cool...",
      project: "/Blog7",
      img: blogImg7,
      icon: deericon,
    },
    {
      title: "Halfway!",
      body: "Now that you are halfway through boot camp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next...",
      project: "/Blog8",
      img: blogImg8,
      icon: streamicon,
    },
    {
      title: "Python",
      body: "What are some similarities and differences you can see with JS and Python? All the same logic concepts are there - it's mainly just differences in...",
      project: "/Blog9",
      img: blogImg9,
      icon: lampicon,
    },
    {
      title: "Django 1",
      body: "What are you struggling with the most in the Tech Stack so far and why?",
      project: "/Blog10",
      img: blogImg10,
      icon: foresticon,
    },
    {
      title: "Django 2",
      body: "After having built your first full-stack application, what things in your repertoire are a sticking point for you? Were you able to",
      project: "/Blog11",
      img: blogImg11,
      icon: treeicon,
    },
    {
      title: "Finish Line!",
      body: "Describe Agile Development or a specific ceremony (stand up, retro, sprints, etc.)",
      project: "/Blog12",
      img: blogImg12,
      icon: mtdistanticon,
    },
    {
      title: "Final Project 1",
      body: "After making it through the tech stack, where do you think your current gaps are?",
      project: "/Blog13",
      img: blogImg13,
      icon: hikingicon,
    },
    {
      title: "Final Project 2",
      body: "Take a look back at your blog posts over the last 16 weeks. Where do you see yourself growing the most? ",
      project: "/Blog14",
      img: blogImg14,
      icon: finishicon,
    },
    {
      title: "The First Month",
      body: "It's been almost one month since graduating from the bootcamp? What have you been doing?",
      project: "/Blog15",
      img: blogImg15,
      icon: saplingicon,
    },
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
        <div className="img1">
          <img src={blogTeaser.img} alt="" />
          <a href={blogTeaser.project}>
            <div className="img2">
              <img src={blogTeaser.icon} alt="" />
            </div>
          </a>
          <div className="main-text">
            <h2>{blogTeaser.title}</h2>
            <p>{blogTeaser.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTeaser;
