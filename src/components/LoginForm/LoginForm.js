import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/userActions";
import "../../App.css";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import {withRouter} from 'react-router-dom' 
const LoginForm = (props) => {
  const dispatch = useDispatch();

  //State user
  const initialState = {
    email: "",
    password: "",
  };

  //useState hook
  const [state, setState] = useState(initialState);

  //handleChange controller
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //Login method
  const login = () => {
    if (state.email !== "" && state.password !== "") {
      dispatch(loginAction(state)).then((resp) => {
        if (resp !== undefined) {
          props.history.push("/Home");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "User not found",
          });
        }
      });
    } else {
      Swal.fire("Email and password are required");
    }
  };

  



  return (
    <div className="opacity">
      <div className="card-body">
        <h5 className="card-title titleLogin">Log In</h5>

        <div className="containerInputs">
          <div className="inputs">
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              type="text"
              className="form-control"
            />
          </div>
          <div className="inputs">
            <input
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Password"
              type="password"
              className="form-control"
            />
          </div>

          <div>
            <Button
              variant="contained"
              color="primary"
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={() => login()}
            >
              <strong className="font">Go</strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
