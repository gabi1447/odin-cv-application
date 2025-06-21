function Experience({
    companyName,
    title,
    dateStarted,
    dateFinished,
    responsabilities,
    id,
    onChange,
    onDelete,
}) {
    const companyId = "companyName";
    const titleId = "title";
    const dateStartedId = "dateStarted";
    const dateFinishedId = "dateFinished";
    const responsabilitiesId = "responsabilities";
    return (
        <>
            <label htmlFor={companyId} className="field">
                <b>Company:</b>
                <input
                    type="text"
                    id={companyId}
                    className="inputField"
                    value={companyName}
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                />
            </label>
            <label htmlFor={titleId} className="field">
                <b>Title:</b>
                <input
                    type="text"
                    id={titleId}
                    className="inputField"
                    value={title}
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                />
            </label>
            <label htmlFor={dateStartedId} className="field">
                <b>Date started:</b>
                <input
                    type="date"
                    id={dateStartedId}
                    className="inputField"
                    value={dateStarted}
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                />
            </label>
            <label htmlFor={dateFinishedId} className="field">
                <b>Date finished:</b>
                <input
                    type="date"
                    id={dateFinishedId}
                    className="inputField"
                    value={dateFinished}
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                />
            </label>
            <label htmlFor={responsabilitiesId} className="field">
                <b>Responsabilities:</b>
                <textarea
                    name={responsabilitiesId}
                    id={responsabilitiesId}
                    rows={10}
                    cols={50}
                    value={responsabilities.join(", ")}
                    placeholder="api testing, database administration"
                    onChange={(e) => {
                        onChange(e, id);
                    }}
                ></textarea>
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

function ExperienceCv({
    companyName,
    title,
    dateStarted,
    dateFinished,
    responsabilities,
}) {
    return (
        <>
            <p>
                <b>Company: {companyName}</b>
            </p>
            <p>
                <b>Title: </b>
                {title}
            </p>
            <p>
                <b>Date Started: </b>
                {dateStarted}
            </p>
            <p>
                <b>Date Finished: </b>
                {dateFinished}
            </p>
            <p>
                <b>Responsabilities:</b>
            </p>
            <ul>
                {responsabilities.map((responsability) => {
                    return <li>{responsability}</li>;
                })}
            </ul>
        </>
    );
}

export { Experience, ExperienceCv };
