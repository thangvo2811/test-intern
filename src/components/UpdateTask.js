import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Button, notification } from "antd";
import axios from "axios";

const UpdateTask = (props) => {
  const [loadings, setLoadings] = useState([]);
  const [updateTask, setUpdateTask] = useState();

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };
  const handleUpdateTask = async (isCompleted) => {
    await axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${props.id}`, {
        completed: isCompleted,
      })
      .then((res) => {
        console.log(res.data);
        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Button
        type="default"
        loading={loadings[props.id]}
        onClick={() => {
          enterLoading(props.id);
          handleUpdateTask(!updateTask);
        }}
      >
        Mark done
      </Button>
    </Fragment>
  );
};

export default UpdateTask;
