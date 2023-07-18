import React from "react";

const Education = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Education</h2>
      <div
        className="education-container"
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <div className="education-item">
          <h3>Primary School</h3>
          <p>Simerro Primaty School</p>
          <p> 2009 - 2016</p>
        </div>
        <div className="education-item">
          <h3>High School</h3>
          <p>Maliera Boys Secondary </p>
          <p>2017 - 2020</p>
        </div>
        <div className="education-item">
          <h3>Higher Education</h3>
          <p>Kibabi University</p>
          <p>2021 - to date...</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
