import "./Form.css";

const Form = () => {
  return (
    <form>
      <label>
        <input className="error" type="text" placeholder="First Name" />
        <small className="error-message">First name cannot be empty</small>
      </label>

      <label>
        <input type="text" placeholder="Last Name" />
      </label>

      <label>
        <input type="email" placeholder="Email Address" />
      </label>

      <label>
        <input type="password" placeholder="Password" />
      </label>

      <button type="submit">Claim your free trial</button>

      <small className="legend">
        By clicking the button you are agreeing to ours{" "}
        <a href="#">Terms and Services</a>
      </small>
    </form>
  );
};

export default Form;
