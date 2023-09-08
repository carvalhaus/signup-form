import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for claim a free trial!");
  };

  return (
    <form id="signUpForm" onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          id="firstName"
          className={errors?.firstName && "error"}
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true, minLength: 4 })}
        />
        {errors?.firstName?.type === "required" && (
          <small className="error-message">First name cannot be empty</small>
        )}
        {errors?.firstName?.type === "minLength" && (
          <small className="error-message">
            First name must be at 4 characters
          </small>
        )}
      </label>

      <label>
        <input
          id="lastName"
          className={errors?.lastName && "error"}
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true, minLength: 4 })}
        />
        {errors?.lastName?.type === "required" && (
          <small className="error-message">Last name cannot be empty</small>
        )}
        {errors?.lastName?.type === "minLength" && (
          <small className="error-message">
            Last name must be at 4 characters
          </small>
        )}
      </label>

      <label>
        <input
          id="email"
          className={errors?.email && "error"}
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors?.email?.type === "required" && (
          <small className="error-message">Email cannot be empty</small>
        )}
        {errors?.email?.type === "pattern" && (
          <small className="error-message">
            Looks like this is not an email
          </small>
        )}
      </label>

      <label>
        <input
          id="password"
          className={errors?.password && "error"}
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 4,
            maxLength: 30,
          })}
        />
        {errors?.password?.type === "required" && (
          <small className="error-message">Password cannot be empty</small>
        )}
        {(errors?.password?.type === "minLength" ||
          errors?.password?.type === "maxLength") && (
          <small className="error-message">
            Password must be between 4 and 30 characters{" "}
          </small>
        )}
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
