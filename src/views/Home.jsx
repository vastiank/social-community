import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import "../App.css";
import ButtonComponent from "../components/Button/ButtonComponent";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const Home = (props) => {
  const { userData } = useSelector((state) => state.userReducer)

  const { users } = useSelector((state) => state.userReducer);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log("userData from redux => ", userData);
    console.log("props => ", props);
  }, []);

  return (
    <div className="body">

      <div className="containerHome">

        {
          Object.keys(userData).length !== 0 && (
            <div style={{ display: "flex", justifyContent: "flex-end", width: '100%', height: '20%', padding: 20 }}>
              <div>
                <i class="fas fa-user-circle fa-3x"></i>
              </div>
              <div>
                <p> {userData.email} </p>
              </div>
            </div>
          )
        }


        <div style={{width: '100%', height: '80%'}}>

          {/* <div>
            <i class="fas fa-users fa-5x"></i>
          </div> */}

          <div className="center">
            <h1 className="fontTitle">Social Community</h1>
          </div>

          <div className="center">
            <Button
              variant="contained"
              color="secondary"
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <strong className="font">Choose an option</strong>
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => props.history.push("/login")}>
                LogIn
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>List Users</MenuItem>
              <MenuItem onClick={handleClose}>Create User</MenuItem> */}
            </Menu>
          </div>
        </div>
      </div>

      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                 <ButtonComponent title={'Social Community'} />
            </div> */}
    </div>
  );
};

export default Home;
