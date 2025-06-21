import Form from "./Form";
import Cv from "./Cv";
import General from "./General";
import { Experience, ExperienceCv } from "./Experience";
import { Education, EducationCv } from "./Education";
import { useState } from "react";

function App() {
    // General Information State
    const [generalFormData, setGeneralFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });
    const [generalFormDataSubmitted, setGeneralFormDataSubmitted] = useState(
        {}
    );

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setGeneralFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function handleGeneralSubmit(e) {
        e.preventDefault();
        setGeneralFormDataSubmitted(generalFormData);
    }

    // Education Component State
    const [education, setEducation] = useState([
        {
            id: crypto.randomUUID(),
            schoolName: "",
            title: "",
            finishedDate: "",
        },
    ]);

    const [educationSubmitted, setEducationSubmitted] = useState([]);

    function handleEducationChange(e, id) {
        const field = e.target.id;
        const value = e.target.value;
        setEducation(
            education.map((study) => {
                if (id === study.id) {
                    return {
                        ...study,
                        [field]: value,
                    };
                } else {
                    return study;
                }
            })
        );
    }

    function handleEducationSubmit() {
        setEducationSubmitted(education);
    }

    function addNewEducation() {
        setEducation([
            ...education,
            {
                id: crypto.randomUUID(),
                schoolName: "",
                title: "",
                finishedDate: "",
            },
        ]);
    }

    // Work Experience Component
    const [experience, setExperience] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "",
            title: "",
            dateStarted: "",
            dateFinished: "",
            responsabilities: [],
        },
    ]);

    const [experienceSubmitted, setExperienceSubmitted] = useState([]);

    function handleExperienceChange(e, id) {
        const field = e.target.id;
        const value = e.target.value;

        if (field === "responsabilities") {
            const arrayOfResponsabilities = value
                .split(", ")
                .map((word) => word.trim());

            setExperience(
                experience.map((job) => {
                    if (job.id === id) {
                        return {
                            ...job,
                            [field]: arrayOfResponsabilities,
                        };
                    } else {
                        return job;
                    }
                })
            );
            return;
        }
        setExperience(
            experience.map((job) => {
                if (id === job.id) {
                    return {
                        ...job,
                        [field]: value,
                    };
                } else {
                    return job;
                }
            })
        );
    }

    function handleExperienceSubmit() {
        setExperienceSubmitted(experience);
    }

    function addNewExperience() {
        setExperience([
            ...experience,
            {
                id: crypto.randomUUID(),
                companyName: "",
                title: "",
                dateStarted: "",
                dateFinished: "",
                responsabilities: [],
            },
        ]);
    }

    return (
        <div className="app">
            <Form>
                <h1>General Information</h1>
                <General
                    name={generalFormData.name}
                    email={generalFormData.email}
                    phoneNumber={generalFormData.phoneNumber}
                    onChange={handleChange}
                    onSubmit={handleGeneralSubmit}
                />
                <h1>Education</h1>
                {education.map((study) => {
                    return (
                        <Education
                            key={study.id}
                            schoolName={study.schoolName}
                            title={study.title}
                            finishedDate={study.finishedDate}
                            onChange={handleEducationChange}
                            id={study.id}
                        />
                    );
                })}
                <button onClick={addNewEducation}>+</button>
                <br />
                <button onClick={handleEducationSubmit}>Confirm</button>
                <h1>Experience</h1>
                {experience.map((job) => {
                    return (
                        <Experience
                            key={job.id}
                            companyName={job.companyName}
                            title={job.title}
                            dateStarted={job.dateStarted}
                            dateFinished={job.dateFinished}
                            responsabilities={job.responsabilities}
                            id={job.id}
                            onChange={handleExperienceChange}
                        />
                    );
                })}
                <button onClick={addNewExperience}>+</button>
                <br />
                <button onClick={handleExperienceSubmit}>Confirm</button>
            </Form>
            <Cv>
                <h1 className="cv-h1">General Information</h1>
                <p>
                    <b>Name:</b> {generalFormDataSubmitted.name}
                </p>
                <p>
                    <b>Email:</b> {generalFormDataSubmitted.email}
                </p>
                <p>
                    <b>Phone number:</b> {generalFormDataSubmitted.phoneNumber}
                </p>
                <h1 className="cv-h1">Education</h1>
                {educationSubmitted.map((study, index) => {
                    return (
                        <>
                            <EducationCv
                                schoolName={study.schoolName}
                                title={study.title}
                                finishedDate={study.finishedDate}
                            />
                            {index === educationSubmitted.length - 1 ? null : (
                                <hr />
                            )}
                        </>
                    );
                })}
                <h1 className="cv-h1">Experience</h1>
                {experienceSubmitted.map((job, index) => {
                    return (
                        <>
                            <ExperienceCv
                                companyName={job.companyName}
                                title={job.title}
                                dateStarted={job.dateStarted}
                                dateFinished={job.dateFinished}
                                responsabilities={job.responsabilities}
                            />
                            {index === experienceSubmitted.length - 1 ? null : (
                                <hr />
                            )}
                        </>
                    );
                })}
            </Cv>
        </div>
    );
}

export default App;
