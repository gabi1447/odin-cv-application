import Form from "./Form";
import General from "./General";
import Cv from "./Cv";
import { useState } from "react";

function App() {
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
            </Form>
            <Cv>
                <h1 className="cv-h1">General Information</h1>
                <p>
                    <b>Name</b> {generalFormDataSubmitted.name}
                </p>
                <p>
                    <b>Email:</b> {generalFormDataSubmitted.email}
                </p>
                <p>
                    <b>Phone number:</b> {generalFormDataSubmitted.phoneNumber}
                </p>
            </Cv>
        </div>
    );
}

export default App;
