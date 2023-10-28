import React from "react";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <div>
        
        <h1 style={{ textAlign: "center", paddingTop: "80px",fontSize:'60px' }}>
          <b>What we offer</b>
        </h1>
      </div>
      <div className="row row-cols-2 row-cols-sm-1 row-cols-md-2 g-4 m-5">
        <div className="col ">
          <div className="card ">
            <div className="card-body">
              <b>
                <h3>
                  <b>Learning Hub</b>
                </h3>
              </b>
              <p className="card-text">
                Dive into our extensive library of tutorials, articles, and
                video lessons covering a wide array of topics such as
                programming languages, web development, artificial intelligence,
                and more. Whether you are a beginner or an advanced learner, our
                resources cater to all levels of expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card ">
            <div className="card-body">
              <b>
                <h3>
                  <b>Project Collaboration</b>
                </h3>
              </b>
              <p className="card-text">
                Bring your ideas to life by collaborating with fellow TechChor
                members on exciting projects. Our platform connects you with
                like-minded individuals, allowing you to work together on
                innovative tech ventures, expand your portfolio, and gain
                practical experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body ">
              <b>
                <h3>
                  <b>Workshops and Webinars</b>
                </h3>
              </b>
              <p className="card-text">
                <span>
                Participate in our interactive workshops and webinars conducted
                by industry experts. Learn about the latest trends, tools, and
                technologies shaping the tech landscape. These sessions provide
                valuable insights and hands-on experience that can enhance your
                skills and boost your confidence.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <b>
                <h3>
                  <b>Hackathons and Competitions</b>
                </h3>
              </b>
              <p className="card-text">
                Challenge your problem-solving abilities and creativity by
                participating in our hackathons and competitions. These events
                provide a platform to showcase your skills, compete with peers
                globally, and win exciting prizes. It's not just about winning;
                it's about the knowledge you gain.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <b>
                <h3>
                  <b>Community Forum</b>
                </h3>
              </b>
              <p className="card-text">
                Engage in meaningful discussions, seek help, and share your
                knowledge on our community forum. Ask questions, provide
                solutions, and connect with experts and enthusiasts from around
                the world. Our forum is a supportive space where ideas flourish,
                and friendships are forged.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card ">
            <div className="card-body">
              <b>
                <h3>
                  <b>Career Guidance</b>
                </h3>
              </b>
              <p className="card-text">
                Navigate your future with confidence with our career guidance
                resources. From resume building to interview preparation, we
                provide valuable tips and insights to help you land internships,
                co-op opportunities, and full-time positions in the tech
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
