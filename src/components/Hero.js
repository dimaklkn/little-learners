import React from "react";

const Hero = () => {
  return (
    <section className="hero wrapper">
      <div className="hero__img-container"></div>
      <div className="hero__text">
        <div className="hero__text-greetings">
          <p>Welcome to Little Learners Academy</p>
          <h2>
            Where Young Minds Blossom and <span>Dreams Take Flight.</span>
          </h2>
        </div>
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className="hero__numbers">
          <div className="hero__numbers-num">
            <h3>+7000</h3>
            <p>Students Passed Out</p>
          </div>
          <div className="hero__numbers-num">
            <h3>+37</h3>
            <p>Awards & Recognitions</p>
          </div>
          <div className="hero__numbers-num">
            <h3>+15</h3>
            <p>Experiensed Educators</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
