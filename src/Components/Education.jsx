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
          <h3>Higher Education</h3>
          <p>Kibabi University</p>
          <p>2021 - to date...</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
