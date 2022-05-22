import React from "react";
import { experience } from "./Data";
import { BsFillBriefcaseFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section className="exp-section">
      <div className="exp-header">
        <h2>Experince</h2>
        <div className="underline"></div>
      </div>
      <div className="card-container">
        {experience.map((item, index) => {
          const { id, company, role, span } = item;
          return (
            <div key={id} className="exp-card">
              <div>
                <BsFillBriefcaseFill className="logo1" />
              </div>
              <h3>{role}</h3>
              <h4>{company}</h4>
              <h4>{span}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
