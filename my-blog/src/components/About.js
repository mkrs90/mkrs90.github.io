import React from 'react';
import personalPic from '../img/ks.jpg';


function About() {
    return (
      <div id="aboutPage" className="container-fluid d-flex justify-content-center">
        <div className="text-center mt-5 float-start">
          <div className="display-6" style={{ fontFamily: '"Labrada", serif' }}>
          About Me
          </div>
          <p className="mt-5">
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
        <div
          id="about_img_container"
          className="m-5 float-end"
        >
          <img id='about_img' src={personalPic} alt="Katy Simpson" />
        </div>
      </div>
    );
}

export default About;