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
            Hi, my name is Katy Simpson. I have worked in the manufacturing field for almost 10 years. In 2019 I started
            working at a startup company in Louisville, KY that wanted to create breakthrough technology for
            the neurological healthcare field and develope their own hardware and software solutions.
            While I was working on manufacturing the hardware I was able to work closely work with the software team
            and was amazed by what they could accomplish through code and how it was able to change both patient and
            doctors lives for the better. I began to study javascript during my free time after work. I feel in love with it
            and knew I this is what I wanted to do. I began to save money in hopes of joining a bootcamp to take my
            journey to the next level. I found Awesome Inc U. Full Stack bootcamp and thought it was perfect! 
            I left my manufacturing job and enrolled in the bootcamp. I wanted to take this journey
            to help better my life and the lives of those around me. This blog is here
            to showcase that journey through the awesome inc bootcamp and hopefully
            into a fulfilling career in code. I also love nature and hiking and saw many
            similarities in hiking so my blog makes many comparisons to that. So please
            join me on my journey here and lets pack some snacks and make tracks!
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