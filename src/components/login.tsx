import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../util/GlobalContext";

interface LoginProps {
  username: string;
  password?: string;
}

const Login = () => {
  const [state, setState] = useState<LoginProps>({
    username: "",
    password: "",
  });
  const context = useContext(GlobalContext);
  const data = context.arrUsers;

  // Login.defaultProps = {
  //   username: "ccc",
  //   password: "ddd",
  // };

  const navigate = useNavigate();
  function handleFormOnChange(e: React.FormEvent<HTMLInputElement>) {
    var name = e.target as HTMLInputElement;
    var value = e.target as HTMLInputElement;
    setState((prevState) => {
      return {
        ...prevState,
        [name.name]: value.value,
      };
    });
  }

  function onValidation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.username === "" || state.password === "") {
      alert("Empty Username or Password");
    } else {
      context.loginUserIndex = -1;
      data.forEach((item: any, i: number) => {
        if (
          item.username === state.username &&
          item.password === state.password
        ) {
          context.loginUserIndex = i;
          console.log(context.loginUserIndex);
          navigate("./profile", { replace: true });
        }
      });
      if (context.loginUserIndex === -1) {
        alert("Username or password is incorrect");
      }
    }
  }

  return (
    <div className="container border border-dark my-5">
      <div className="row my-5 justify-content-center">
        <div className="col-lg-2">
          <form onSubmit={onValidation}>
            <label className="form-label">
              Username:
              <input
                type="text"
                name="username"
                onChange={handleFormOnChange}
                value={state.username}
              />
            </label>
            <label className="form-label">
              Password:
              <input
                type="password"
                name="password"
                onChange={handleFormOnChange}
                value={state.password}
              />
            </label>
            <button
              type="submit"
              name="login"
              value="Login"
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
