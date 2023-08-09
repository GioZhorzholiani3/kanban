import classNames from "classnames";
import classes from "./Task.module.css";
import { useStore } from "../store/store";
import { FaRegTrashAlt } from "react-icons/fa";

type TaskProps = {
  title: string;
};

// const STATUS = "planned";

const Task: React.FC<TaskProps> = (props) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === props.title)
  );

  const setDraggedTask = useStore((store) => store.setDraggedTask);

  const deleteTask = useStore((store) => store.deleteTask);

  const statusClass = classNames({
    [classes.status]: true,
    [classes.planned]: task!.state === "planned",
    [classes.ongoing]: task!.state === "ongoing",
    [classes.done]: task!.state === "done",
  });
  //   console.log(task);

  return (
    <div
      className={classes.task}
      draggable
      onDragStart={() => {
        setDraggedTask(task!.title);
      }}
    >
      <div>{task!.title}</div>
      <div className={classes.bottomWrapper}>
        <div>
          <FaRegTrashAlt onClick={() => deleteTask(task!.title)} />
        </div>
        <div className={statusClass}>{task!.state}</div>
      </div>
    </div>
  );
};

export default Task;
