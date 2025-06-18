function General({ name, email, phoneNumber, onChange, onSubmit }) {
    return (
        <form className="general-information" onSubmit={onSubmit}>
            <label className="field">
                Name:{" "}
                <input
                    className="inputField"
                    type="text"
                    id="name"
                    value={name}
                    onChange={onChange}
                />
            </label>
            <br />
            <label className="field">
                Email:{" "}
                <input
                    className="inputField"
                    type="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                />
            </label>
            <br />
            <label className="field">
                Phone Number:{" "}
                <input
                    className="inputField"
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={onChange}
                />
            </label>
            <br />
            <button type="submit">Confirm</button>
        </form>
    );
}

export default General;
