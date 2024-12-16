import React from "react";
// import images
import arrowRight from "../images/arrow-right-1.png";

const Pages = () => {
  return (
    <section className="pages wrapper">
      <div className="pages__title">
        <button>Explore More</button>
        <h2>Navigate Trough Our Pages</h2>
        <p>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
      </div>
      <div className="pages__pages-container">
        <div className="pages__page">
          <h3>About Us</h3>
          <div className="divider"></div>
          <p>
            Discover our Mission, Values, and our unwavering commitment to
            providing the best learning experience for your child. Learn about
            our passionate educators and our engaging approach to early
            education.
          </p>
          <button className="button">
            Learn More <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="pages__page">
          <h3>Academics</h3>
          <div className="divider"></div>
          <p>
            Delve into our comprehensive academic programs designed to stimulate
            young minds, foster creativity, and encourage a love for learning.
            Explore our well-rounded curriculum that nurtures both intellectual
            and social development.
          </p>
          <button className="button">
            Learn More <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="pages__page">
          <h3>Student Life</h3>
          <div className="divider"></div>
          <p>
            Peek into the vibrant and enriching world of Student Life at Little
            Learners Academy. Discover the array of extracurricular activities,
            arts and crafts, sports, and social events that make our school
            experience truly memorable.
          </p>
          <button className="button">
            Learn More <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="pages__page">
          <h3>Admissions</h3>
          <div className="divider"></div>
          <p>
            Learn about our Enrollment Process and how to secure your child's
            place at Little Learners Academy. Find information about our
            admission requirements, application deadlines, and available spaces.
          </p>
          <button className="button">
            Learn More <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pages;
