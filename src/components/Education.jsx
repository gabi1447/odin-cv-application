function Education({
    id,
    schoolName,
    title,
    finishedDate,
    onChange,
    onDelete,
}) {
    const schoolNameId = "schoolName";
    const titleId = "title";
    const finishedDateId = "finishedDate";
    return (
        <>
            <label htmlFor={schoolNameId} className="field">
                <b>School Name:</b>
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
                <b>Title:</b>
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
                <b>Finished Date:</b>
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
            <button
                className="deleteButton"
                onClick={() => {
                    onDelete(id);
                }}
            >
                Delete
            </button>
            <br />
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
