import React, { useState } from "react";
import { icons } from "react-icons/lib";
import { education } from "./Data";
import { MdOutlineWork } from "react-icons";

const Education = () => {
  const [value, setValue] = useState(0);
  const [school, setSchool] = useState(education);

  const { id, type, name, city, percentile, from, to } = school[value];

  return (
    <section className="edu-section">
      <div className="edu-title">
        <h2>Education</h2>
        <div className="underline"></div>
      </div>
      <div className="edu-container">
        <div className="edu-btn-container">
          {school.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`edu-btn ${index === value && "edu-active-btn"}`}
              >
                {item.type}
              </button>
            );
          })}
        </div>
        <article className="edu-school-container">
          <h2>{name}</h2>
          <h3>{city}</h3>
          <h4>
            {from}-{to}
          </h4>
          <h1>{percentile}</h1>
        </article>
      </div>
    </section>
  );
};

export default Education;
