import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Button from "@material-ui/core/Button";
import { createUser } from "../../redux/actions/userActions";
/* import { withRouter } from "react-router-dom"; */

const CreateForm = (props) => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    job: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const createNewUser = () => {
    console.log("state => ", state);
    if (state.name !== "" && state.job !== "") {
      dispatch(createUser(state)).then((resp) => {
        console.log("response in view => ", resp);
        Swal.fire({
          icon: "success",
          title: "That's Great",
          text: "User has been created",
          showConfirmButton: false,
        });

        setTimeout(() => {
          props.props.history.push("/home");
          Swal.close();
        }, 3000);
      });
    } else {
      Swal.fire("Name and Job are required");
    }
  };

  return (
    <div className="opacity">
      <div className="card-body">
        <h5 className="card-title titleLogin">Sign Up</h5>

        <div className="containerInputs">
          <div className="inputs">
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="inputs">
            <input
              name="job"
              onChange={(e) => handleChange(e)}
              placeholder="Job"
              type="type"
              className="form-control"
            />
          </div>

          <div>
            <Button
              variant="contained"
              color="primary"
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={() => createNewUser()}
            >
              <strong className="font">Create</strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
