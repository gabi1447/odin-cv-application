function General({ name, email, phoneNumber, onChange, onSubmit }) {
    return (
        <form className="general-information" onSubmit={onSubmit}>
            <label htmlFor="name" className="field">
                <b>Name:</b>{" "}
                <input
                    className="inputField"
                    type="text"
                    id="name"
                    value={name}
                    onChange={onChange}
                />
            </label>
            <br />
            <label htmlFor="email" className="field">
                <b>Email:</b>{" "}
                <input
                    className="inputField"
                    type="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                />
            </label>
            <br />
            <label htmlFor="phoneNumber" className="field">
                <b>Phone Number:</b>{" "}
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
