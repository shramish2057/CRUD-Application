import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css"
import { store } from 'react-notifications-component';


const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    store.addNotification({
      title: "Wonderful!",
      message: "Successfully deleted the job!",
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
      }
    });
    loadUsers();
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Job Postings</h1>
        <table class="main-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Id</th>
              <th scope="col"> Job Title</th>
              <th scope="col">Employer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index+ 1}</th>
                <td>{user.id}</td>
                <td><Link class='title-link' href="#" exact to={`/users/${user.id}`} >{user.title}</Link></td>
                <td>{user.employer}</td>
                <td>
                  <Link class="crud-btn" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="crud-btn"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="crud-btn"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

