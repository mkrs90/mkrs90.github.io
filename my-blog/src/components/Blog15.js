import BlogIcon from "../img/blog_icons/sapling.png";
import blogimg from "../img/sapling_image.jpg";

function Blog15(view) {
  let blogs = [
    {
      id: 14,
      title: "First Month",
      Q1: "What have you been doing since graduating bootcamp?",
      A1: "Time certainly flies when you're out of bootcamp. Since graduating I've been doing a lot of studying. I want to continue my education but this time I'm trying to get some certificated on cloud technologies. I've been reading up on the AWS Cloud Practitioner exam as well as going through a google course on Data Analytics. In parelle to those I've also been continueing to work on my capstone project by adding some APIs. The two main APIs I've added are the National Parks Service API, which hold all the different national parks in america as well as a ton of information on them. I've been able to pull it into my website and display a lot of fantastic information they have. In order to pull it into my site I had to set up a useEffect to make an API call and also with every request send my API key so I could get the information. I've also added in a weather API that adds information about the weather at the parks location.",
      Q2: "How has the job search been going?",
      A2: "I've been building up my network and working with my already established network in search of a job. Thankfully I was able to build a very strong network before joining the bootcamp that has worked wonders for me and my job search. I was able to get a ton of referals, a job interview, and a JOB!!! It's been incredable and I'm very excited to start the next chapter of my life! It feels so surreal to have a job title of Software Developer!",
      icon: BlogIcon,
      img: blogimg,
    },
  ];

  return (
    <div id="singleBlogMainPage" className="container-fluid p-5">
      {blogs
        .filter((blog) => {
          return blog.id === 14;
        })
        .map(function (blog) {
          return <Blog15Card key={blog.id} blog={blog} />;
        })}
    </div>
  );
}

export default Blog15;

export const Blog15Card = ({ blog }) => {
  return (
    <div className="container pt-3 ps-5 pe-5 pb-5" id="singleBlogPage">
      <div className="text-center">
        <div id="singleBlogHeader" className="mt-1 mb-3">
          Journey Through Code
        </div>
        <div id="theTrailHead">The Summit of Success</div>
        <div id="blogTitle" className="display-5">
          ({blog.title})
        </div>
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
      <div id="bobrossDiv" className="row">
        <img className="col-6" src={blog.img} alt="" />
        <div id="blog_quote" className="col-6 pt-3">
          "Growth takes place outside of your comfort zone." - Dawn Staley
        </div>
      </div>
    </div>
  );
};
