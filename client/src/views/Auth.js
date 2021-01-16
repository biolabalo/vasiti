import { useForm } from "react-hook-form";

const Auth = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1>User Login</h1>
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          ref={register({ required: true })}
        />

        {errors.email && <span className="error">This field is required</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />

        {errors.password && (
          <span className="error">This field is required</span>
        )}

        <div>
          <input
            className="wis"
            type="radio"
            name="user_type"
            value={0}
            ref={register({ required: true })}
          />{" "}
          <span style={{color: "white"}}>buyer</span>
          <input
            className="wis"
            type="radio"
            name="user_type"
            value={1}
            ref={register({ required: true })}
          />
          <span style={{color: "white"}}>seller</span>
          {errors.user_type && (
            <p className="error">This field is required</p>
          )}
        </div>

        <button>Log-in</button>
      </form>
    </>
  );
};

export default Auth;
