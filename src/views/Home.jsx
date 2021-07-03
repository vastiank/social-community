import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import {Link} from 'react-router-dom'

const Home = (props) => {
  const { userData } = useSelector((state) => state.userReducer);

  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  const signOut = () => {
    window.location.reload();
  }

  return (
    <div className="body">
      <div className="containerHome">
        {Object.keys(userData).length !== 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "20%",
              padding: 20,
            }}
          >
            <div>
              <i style={{color: '#fff'}} className="fas fa-user-circle fa-2x"></i>
            </div>
            <div>
              <h5 className="font"> Welcome, {userData.email} </h5>
            </div>
          </div>
        )}

        <div style={{ width: "100%", height: "80%" }}>
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

              {Object.keys(userData).length !== 0 ? (
                <>
                  <MenuItem onClick={() => signOut()}>
                    SignOut
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link style={{textDecoration: 'none'}} to="/usuarios">
                      Users
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Create</MenuItem>
                </>
              ) : (
                <MenuItem onClick={() => props.history.push("/login")}>
                  LogIn
                </MenuItem>

              )
            }
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
