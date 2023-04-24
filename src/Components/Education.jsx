import React from 'react';

const Education = () => {
    return(
        <section className ="light" id = "portfolio">
            <h2>Education</h2>
            <div className="education-container">
                <div className="education-item">
                    <h3>Primary School</h3>
                    <p>Name of School: <strong>[insert name of school]</strong></p>
                    <p>Date Attended: <strong>[insert start date] - [insert end date]</strong></p>
                </div>
                <div className="education-item">
                    <h3>High School</h3>
                    <p>Name of School: <strong>[insert name of school]</strong></p>
                    <p>Date Attended: <strong>[insert start date] - [insert end date]</strong></p>
                </div>
                <div className="education-item">
                    <h3>Higher Learning</h3>
                    <p>Name of School: <strong>[insert name of school]</strong></p>
                    <p>Date Attended: <strong>[insert start date] - [insert end date]</strong></p>
                </div>
            </div>
        </section>        
    )
}

export default Education;


