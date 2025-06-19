import Form from "./Form";
import Cv from "./Cv";
import General from "./General";
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
            education.map((job) => {
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
                {education.map((job) => {
                    return (
                        <Education
                            key={job.id}
                            schoolName={job.schoolName}
                            title={job.title}
                            finishedDate={job.finishedDate}
                            onChange={handleEducationChange}
                            id={job.id}
                        />
                    );
                })}
                <button onClick={addNewEducation}>+</button>
                <br />
                <button onClick={handleEducationSubmit}>Confirm</button>
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
                {educationSubmitted.map((job, index) => {
                    return (
                        <>
                            <EducationCv
                                schoolName={job.schoolName}
                                title={job.title}
                                finishedDate={job.finishedDate}
                            />
                            {index === educationSubmitted.length - 1 ? null : (
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
