// import { useMemo } from "react";
import { useStore } from "../store/store";
import classes from "./Column.module.css";
import Task from "./Task";
import { useState } from "react";
// import { shallow } from "zustand/shallow";

type ColumnProps = {
  state: string;
};

const Column: React.FC<ColumnProps> = (props) => {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === props.state)
  );

  const addTask = useStore((store) => store.addTask);
  // const filtered = useMemo(
  //   () => tasks.filter((task) => task.status === props.state),
  //   [tasks, props.state]
  // );

  const [text, setText] = useState("");

  return (
    <div className={classes.column}>
      <div className={classes.titleWrapper}>
        <p className={classes.state}>{props.state}</p>
        <button
          onClick={() => {
            addTask("asd" + props.state, props.state);
          }}
        >
          Add
        </button>
      </div>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
    </div>
  );
};

export default Column;
