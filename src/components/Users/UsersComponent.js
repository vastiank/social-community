import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../App.css";
import { getListAction } from "../../redux/actions/userActions";
import Button from "@material-ui/core/Button";

const UsersComponent = (props) => {
  const dispatch = useDispatch();

  const { token, users } = useSelector((state) => state.userReducer);

  const getUsers = useCallback(() => {
    dispatch(getListAction(token));
  }, [token, dispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
      >
        <Button
          variant="contained"
          color="secondary"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={() => props.props.history.push("/home")}
        >
          <i class="fas fa-chevron-left"></i>
          <strong className="font ml-2"> Back </strong>
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <table className="table table-dark table-striped tableStyle">
          <thead>
            <tr>
              <th className="fontTitleRows">ID</th>
              <th className="fontTitleRows">Email</th>
              <th className="fontTitleRows">First Name</th>
              <th className="fontTitleRows">Last Name</th>
              <th className="fontTitleRows">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((element, index) => (
              <tr key={index.toString()}>
                <td className="fontTitleRows">{element.id}</td>
                <td className="fontTitleRows">{element.email}</td>
                <td className="fontTitleRows">{element.first_name}</td>
                <td className="fontTitleRows">{element.last_name}</td>
                <td className="fontTitleRows">
                  <img
                    style={{ width: 100, height: 100 }}
                    src={element.avatar}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersComponent;
