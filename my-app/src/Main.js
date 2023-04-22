import React from "react";
import pic from "./profile.png";

const Main = () => {
  let name = "Prajwal GM";
  let age = 24;
  let gender = "male";
  return (
    <section className="section-1">
      <div className="profile-container">
        <img src={pic} className="img-container"></img>
      </div>
      <div className="desc-container">
        <h1>{name}</h1>
        <hr className="new1" />
        <h3>{age}</h3>
        <h3>{gender}</h3>
        <p style={{ color: "white" }}>
          Aspiring web developer . html, css, React, JavaScript, GRETES SHOW
          EVER SOM BYLSH UFHF JHDU Yydhuf hfuihf hufh iuuoiw ncupdu kxwh wliue
          fyr hux hiu
        </p>
        <button className="button1">contact me</button>
      </div>
    </section>
  );
};

export default Main;
