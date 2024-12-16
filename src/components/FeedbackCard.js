import React from "react";
// import images
import star from "../images/star.png";

const FeedbackCard = ({ profileImage, name, text }) => {
  return (
    <article className="carousel__feedback has-fade fade-in">
      <div className="carousel__feedback__img-container">
        <img src={profileImage} alt="" />
      </div>
      <h3 className="feedback__name">{name}</h3>
      <div className="carousel__feedback-stars">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <p>{text}</p>
    </article>
  );
};

export default FeedbackCard;
