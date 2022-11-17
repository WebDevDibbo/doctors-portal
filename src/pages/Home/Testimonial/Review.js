import React from "react";

const Review = ({ review }) => {
  const { name, review: userReview, location, img } = review;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body">
          <p>{userReview}</p>
          <div className="card-actions mt-9 items-center ">
            <div className="avatar">
              <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
                <h5>{name}</h5>
                <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
