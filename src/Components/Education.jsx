import React from 'react';

const Education = () => {
    return (
        <section className="light" id="portfolio">
            <h2>Education</h2>
            <div className="education-container"
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
                    <p>Name of School: Simerro Primaty School</p>
                    <p>Date Attended: 2009 - 2016</p>
                </div>
                <div className="education-item">
                    <h3>High School</h3>
                    <p>Name of School: Maliera Boys Secondary </p>
                    <p>Date Attended: 2017 - 2020</p>
                </div>
                <div className="education-item">
                    <h3>Higher Learning</h3>
                    <p>Name of School: Kibabi University</p>
                    <p>Date Attended: 2021 - to date...</p>
                </div>
            </div>
        </section>
    )
}

export default Education;


