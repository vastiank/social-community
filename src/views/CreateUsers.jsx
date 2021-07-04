import React from "react";
import "../App.css";
import CreateForm from "../components/CreateForm/CreateForm";

const CreateUsers = props => {
  return (
    <div className="body">
      <div className="flexCenter">
        <CreateForm props={props} />
      </div>
    </div>
  );
};

export default CreateUsers;
