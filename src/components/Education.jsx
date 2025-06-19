function Education({ id, schoolName, title, finishedDate, onChange }) {
    const schoolNameId = "schoolName";
    const titleId = "title";
    const finishedDateId = "finishedDate";
    return (
        <>
            <label htmlFor={schoolNameId} className="field">
                School Name:
                <input
                    type="text"
                    className="inputField"
                    id={schoolNameId}
                    value={schoolName}
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                />
            </label>
            <label htmlFor={titleId} className="field">
                Title:
                <input
                    type="text"
                    className="inputField"
                    id={titleId}
                    value={title}
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                />
            </label>
            <label htmlFor={finishedDateId} className="field">
                Finished Date:
                <input
                    type="date"
                    className="inputField"
                    id={finishedDateId}
                    value={finishedDate}
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                />
            </label>
        </>
    );
}

function EducationCv({ schoolName, title, finishedDate }) {
    return (
        <>
            <p>
                <b>School Name:</b> {schoolName}
            </p>
            <p>
                <b>Title:</b> {title}
            </p>
            <p>
                <b>Finished Date:</b> {finishedDate}
            </p>
        </>
    );
}

export { Education, EducationCv };
