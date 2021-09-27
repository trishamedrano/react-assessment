import useInput from "../hooks/use-input";
import "./Form.css";

const Form = (props) => {
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangedHandler,
        InputBlurhandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput((value) => value.trim() !== "");

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangedHandler,
        InputBlurhandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput((value) => value.trim() !== "");

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        InputBlurhandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    const {
        value: eidValue,
        isValid: eidIsValid,
        hasError: eidHasError,
        valueChangeHandler: eidChangeHandler,
        InputBlurhandler: eidInputBlurHandler,
        reset: resetEidInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: birthdateValue,
        isValid: birthdateIsValid,
        hasError: birthdateHasError,
        valueChangeHandler: birthdateChangeHandler,
        InputBlurhandler: birthdateInputBlurHandler,
        reset: resetBirthdateInput,
    } = useInput((value) => value.trim() !== "");

    let formIsValid = false;

    if (
        firstNameIsValid &&
        lastNameIsValid &&
        emailIsValid &&
        eidIsValid &&
        birthdateIsValid
    ) {
        formIsValid = true;
    }

    // SUBMIT FORM
    const formSubmissionHandler = (event) => {
        event.preventDefault();

        //  VALIDATION

        if (!firstNameValue) {
            return;
        }

        alert("Data Successfully Added");
        console.log("Added");
        props.onAddUser(
            firstNameValue,
            lastNameValue,
            emailValue,
            eidValue,
            birthdateValue
        );

        // to clear data
        resetFirstName();
        resetLastName();
        resetEmailInput();
        resetEidInput();
        resetBirthdateInput();
    };

    // input style when invalid
    const firstNameClasses = firstNameHasError
        ? "form-control invalid"
        : "form-control";

    const lastNameClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";

    const emailClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    const EIDClasses = eidHasError ? "form-control invalid" : "form-control";

    const birthdateClasses = birthdateHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <section className="main">
            <div className="main-controls">
                <div className="main-control">
                    <div className="container grid">
                        <div className="text">
                            <h2>Work Book</h2>
                            <h1>APPLICATION</h1>
                        </div>

                        <div className="main-form card">
                            <form onSubmit={formSubmissionHandler}>
                                <div className={firstNameClasses}>
                                    <label htmlFor="firstname">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        pattern="[a-zA-Z]*"
                                        onChange={firstNameChangedHandler}
                                        onBlur={firstNameBlurHandler}
                                        value={firstNameValue}
                                    />
                                    {firstNameHasError && (
                                        <p className="error-text">
                                            {" "}
                                            Please enter your first name{" "}
                                        </p>
                                    )}
                                </div>

                                <div className={lastNameClasses}>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        pattern="[a-zA-Z]*"
                                        onChange={lastNameChangedHandler}
                                        onBlur={lastNameBlurHandler}
                                        value={lastNameValue}
                                    />
                                    {lastNameHasError && (
                                        <p className="error-text">
                                            {" "}
                                            Please enter your last name{" "}
                                        </p>
                                    )}
                                </div>

                                <div className={emailClasses}>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={emailChangeHandler}
                                        onBlur={emailInputBlurHandler}
                                        value={emailValue}
                                    />
                                    {emailHasError && (
                                        <p className="error-text">
                                            {" "}
                                            Please enter a valid email{" "}
                                        </p>
                                    )}
                                </div>

                                <div className={EIDClasses}>
                                    <label htmlFor="eid">Enterprise ID</label>
                                    <input
                                        type="number"
                                        id="enterpriseID"
                                        onChange={eidChangeHandler}
                                        onBlur={eidInputBlurHandler}
                                        value={eidValue}
                                    />
                                    {eidHasError && (
                                        <p className="error-text">
                                            {" "}
                                            Please enter a valid EID{" "}
                                        </p>
                                    )}
                                </div>

                                <div className={birthdateClasses}>
                                    <label htmlFor="birthdate">Birthdate</label>
                                    <input
                                        type="date"
                                        id="birthdate"
                                        onChange={birthdateChangeHandler}
                                        onBlur={birthdateInputBlurHandler}
                                        value={birthdateValue}
                                    />
                                    {birthdateHasError && (
                                        <p className="error-text">
                                            {" "}
                                            Please select your birthdate{" "}
                                        </p>
                                    )}
                                </div>

                                <div className="form-actions">
                                    <button disabled={!formIsValid}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
