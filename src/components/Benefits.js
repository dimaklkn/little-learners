import React from "react";
// import images
import hat from "../images/hat-Icon.png";
import crown from "../images/crown-Icon.png";
import saturn from "../images/saturn-Icon.png";
import flag from "../images/flag-Icon.png";
import ball from "../images/ball-Icon.png";
import people from "../images/people-Icon.png";

const Benefits = () => {
  return (
    <section className="benefits wrapper">
      <div className="benefits__title">
        <button>Children Deserve Bright Future</button>
        <h2>Our Benefits</h2>
        <p>
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
      </div>
      <div className="benefits__cards">
        <div className="benefits__card">
          <div className="benefits__card-img-cont">
            <img src={hat} alt="" />
          </div>
          <h3>Holistic Learning Approach</h3>
          <p>
            Our curriculum focuses on nurturing cognitive, social, emotional,
            and physical development, ensuring a well-rounded education.
          </p>
        </div>
        <div className="benefits__card">
          <div className="benefits__card-img-cont">
            <img src={crown} alt="" />
          </div>
          <h3>Experienced Educators</h3>
          <p>
            Our passionate and qualified teachers create a supportive and
            stimulating learning environment.
          </p>
        </div>
        <div className="benefits__card">
          <div className="benefits__card-img-cont">
            <img src={saturn} alt="" />
          </div>
          <h3>Nurturing Environment</h3>
          <p>
            We prioritize safety and provide a warm and caring atmosphere for
            every child.
          </p>
        </div>
        <div className="benefits__card">
          <div className="benefits__card-img-cont">
            <img src={flag} alt="" />
          </div>
          <h3>Play-Based Learning</h3>
          <p>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
        </div>
        <div className="benefits__card">
          <div className="benefits__card-img-cont">
            <img src={ball} alt="" />
          </div>
          <h3>Individualized Attention</h3>
          <p>
            Our small class sizes enable personalized attention, catering to
            each child's unique needs.
          </p>
        </div>
        <div className="benefits__card">
          <div className="benefits__card-img-cont">
            <img src={people} alt="" />
          </div>
          <h3>Parent Involvement</h3>
          <p>
            We foster a strong parent-school partnership to ensure seamless
            communication and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
