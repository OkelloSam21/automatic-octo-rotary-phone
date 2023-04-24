import React from 'react';

const Education = () => {
    return(
        <section className ="light" id = "portfolio">
            <h2>Education</h2>
            <div className="education-container">
                <div className="education-item">
                    <h3>Primary School</h3>
                    <p>Name of School: <strong>Simerro Primaty School</strong></p>
                    <p>Date Attended: <strong>2009 - 2016</strong></p>
                </div>
                <div className="education-item">
                    <h3>High School</h3>
                    <p>Name of School: <strong>Maliera Boys Secondary </strong></p>
                    <p>Date Attended: <strong>2017 - 2020</strong></p>
                </div>
                <div className="education-item">
                    <h3>Higher Learning</h3>
                    <p>Name of School: <strong>Kibabi University</strong></p>
                    <p>Date Attended: <strong>2021 - to date...</strong></p>
                </div>
            </div>
        </section>        
    )
}

export default Education;


