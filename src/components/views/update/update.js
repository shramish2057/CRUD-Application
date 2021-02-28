import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { store } from 'react-notifications-component';

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    store.addNotification({
      title: "Wonderful!",
      message: "Successfully Edited the job",
      type: "info",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
      }
    });
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/?id=${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
        Edit Job Posting
        </div>
        <form onSubmit={e => onSubmit(e)}>
          <div className="field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
            <label>Title</label>
          </div>
          <div className="field">
            <input
              type="text"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
            <label>City</label>
          </div>
          <div className="field">
            <input
              type="text"
              name="employer"
              value={employer}
              onChange={e => onInputChange(e)}
            />
            <label>Employer</label>
          </div>
          <div className="field">
            <input
              type="text"
              name="requirements"
              value={requirements}
              onChange={e => onInputChange(e)}
            />
            <label>Requirements</label>
          </div>
          <div className="field">
            <input
              type="text"
              name="tasks"
              value={tasks}
              onChange={e => onInputChange(e)}
            />
            <label>Tasks</label>
          </div>
          <div class="field">
          <input type="submit" value="Update Job"/>
        </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
