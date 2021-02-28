import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "./create.css"

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    city: "",
    employer: "",  
    requirements: "",
    tasks: ""
  });

  const { title, city, employer, requirements, tasks } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="wrapper">
      <div className="title">
        Add Job Posting
      </div>
        <form onSubmit={e => onSubmit(e)}>
          <div className="field">
            <input
              type="text"
              required
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
            <label>Title</label>
          </div>
          <div className="field">
            <input
              type="text"
              required
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
              <label>City</label>
          </div>
          <div className="field">
            <input
              type="text"
              required
              name="employer"
              value={employer}
              onChange={e => onInputChange(e)}
            />
            <label>Employer</label>
          </div>
          <div className="field">
            <input
              type="text"
              required
              name="requirements"
              value={requirements}
              onChange={e => onInputChange(e)}
            />
            <label>Requirements</label>
          </div>
          <div className="field">
            <input
              type="text"
              required
              name="tasks"
              value={tasks}
              onChange={e => onInputChange(e)}
            />
            <label>Tasks</label>
          </div>
          <div class="field">
          <input type="submit" value="Add Job"/>
        </div>
        </form>
      </div>
    </div>
    
  );
};

export default AddUser;
