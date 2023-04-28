import React from 'react';
import personalPic from '../img/My_Photo.jpg';
import githubIcon from '../img/Github.svg';

function About() {
    return (
      <div id="aboutPage" className="container-fluid text-center">
        <div className="">
          <div className="display-6" id="singleBlogHeader">
          About Me
          </div>
          <div id="about_img_container">
            <img id='about_img' src={personalPic} alt="Katy Simpson" />
          </div>
          <p className="m-5 ps-5 pe-5">
            My name is Katy Simpson. About a year ago I decided I wanted to do
            something completely different with my life, decided to quit career and
            start my Journey in learning code. I decided I wanted to take this journey
            to help better my life and the lives of those around me. This blog is here
            to showcase that journey through the awesome inc bootcamp and hopefully
            into a fulfilling career in code. I love nature and hiking and saw many
            similarities in prepping for a hike and struggling through rough terrain
            and learning code so my blog makes many comparisons to that. So please
            join my on my journey here and lets pack some snacks and make tracks!
          </p>
        </div>
        <div>
          <p>Check me out on Github!</p>
          <a target="_blank" rel="noreferrer" href="https://github.com/mkrs90"><img src={githubIcon} style={{height: "50px"}} alt="github link"/></a>
        </div>
        
      </div>
    );
}

export default About;