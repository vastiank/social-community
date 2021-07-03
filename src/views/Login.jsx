import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import "../App.css";
import Button from "@material-ui/core/Button";
import { loginAction } from "../redux/actions/userActions";
import Swal from 'sweetalert2'

const Login = props => {

  const dispatch = useDispatch()


  //State user
  const initialState = {
    email: '',
    password: '',
  }

  //useState hook
  const [state, setState] = useState(initialState);

  //handleChange controller
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

    console.log('event => ', e.target.value)
  }

  //Login method
  const login = () => {

    console.log('state => ', state)
    console.log('entro')

    /* if (state.email !== ''){
      Swal.fire('Email es obligatorio')
    } */
    
    if (state.email !== '' && state.password !== '') {
      dispatch(loginAction(state))
      props.history.push('/Home')

    } else {

      Swal.fire('Campos obligatorios')
    }
    
  }

  return (
    <div className="body">
      <div className="flexCenter">
        <div className="opacity">
          <div className="card-body ">
            <h5 className="card-title titleLogin">Join</h5>

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
                  type="text"
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
                  <strong className="font">LogIn</strong>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
