// import { useMemo } from "react";
import { useStore } from "../store/store";
import classes from "./Column.module.css";
import Task from "./Task";
import { shallow } from "zustand/shallow";

type ColumnProps = {
  state: string;
};

const Column: React.FC<ColumnProps> = (props) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === props.state),
    shallow
  );

  // const filtered = useMemo(
  //   () => tasks.filter((task) => task.status === props.state),
  //   [tasks, props.state]
  // );

  return (
    <div className={classes.column}>
      <p>{props.state}</p>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
    </div>
  );
};

export default Column;
