import React, { Fragment, useEffect, useState } from "react";
import "./App.scss";
import TaskData from "./components/TaskData";
import axios from "axios";
import { Select } from "antd";

function App() {
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState("");

  const callListUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    callListUser();
  }, []);

  const handleUserId = (value) => {
    setUserId(value);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="container__top">
          <div className="container__top__name">User</div>
          <div className="container__top__border"></div>
        </div>
        <div>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            onChange={handleUserId}
            placeholder="Search to Select"
            optionFilterProp="children"
            options={user.map((item, index) => {
              return { label: item.name, value: item.id };
            })}
          />
        </div>
        <div className="container__bottom">
          <div className="container__bottom__card">
            <div className="container__bottom__card__name">Task</div>
            <div className="container__bottom__card__border"></div>
          </div>
        </div>
        <TaskData idUser={userId}></TaskData>
      </div>
    </Fragment>
  );
}

export default App;
