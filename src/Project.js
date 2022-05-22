import React from "react";
import { Projects } from "./Data";
import { useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

const Project = () => {
  const [value, setValue] = useState(0);

  const checkNumber = (number) => {
    if (number > Projects.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Projects.length - 1;
    }
    return number;
  };

  const nextProject = () => {
    setValue((value) => {
      let newValue = value + 1;
      return checkNumber(newValue);
    });
  };

  const previousProject = () => {
    setValue((value) => {
      let newValue = value - 1;
      return checkNumber(newValue);
    });
  };

  const { id, title, img, technologies, desc } = Projects[value];
  return (
    <section className="pro-section">
      <div className="pro-header">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="pro-container">
        <div className="pro-btn-container1">
          <button onClick={previousProject}>
            <AiFillLeftCircle className="previous-btn" />
          </button>
        </div>
        <div key={id} className="pro-card-container">
          <img src={img} alt="image" className="pro-img-container"></img>
          <div className="pro-desc-container">
            <h3>{title}</h3>
            <div>
              <ul>
                {technologies.map((item, index) => {
                  return (
                    <li className="tech" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p>{desc}</p>
          </div>
        </div>
        <div className="pro-btn-container2">
          <button onClick={nextProject}>
            <AiFillRightCircle className="next-btn" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
