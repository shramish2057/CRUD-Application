import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./read.css" 

const User = () => {
  const [user, setUser] = useState({
    title: "",
    city: "",
    employer: "",
    requirements: "",
    tasks: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/?id=${id}`);
    setUser(res.data[0]);
  };
  return (
    <div className="container">
      <hr/>
      <div className="wrapper">
        <div className="title">
        Job Id: {id}
        </div>
        <ul className="job-list">
        <li className="job-list-item"><span>Title: </span> {user.title}</li>
        <li className="job-list-item"><span>City: </span> {user.city}</li>
        <li className="job-list-item"><span>Employer: </span> {user.employer}</li>
        <li className="job-list-item"><span>Requirements: </span> {user.requirements}</li>
        <li className="job-list-item"><span>Task: </span> {user.tasks}</li>
      </ul>
      </div>
    </div>
  );
};

export default User;
