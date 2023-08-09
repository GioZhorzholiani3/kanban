// import { useMemo } from "react";
import { useStore } from "../store/store";
import classes from "./Column.module.css";
import Task from "./Task";
import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import classNames from "classnames";
import { BiMessageAdd } from "react-icons/bi";

// import { shallow } from "zustand/shallow";

type ColumnProps = {
  state: string;
};

const Column: React.FC<ColumnProps> = (props) => {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === props.state)
  );

  const addTask = useStore((store) => store.addTask);

  const setDraggedTask = useStore((store) => store.setDraggedTask);

  const draggedTask = useStore((store) => store.draggedTask);

  const moveTask = useStore((store) => store.moveTask);

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const columnClass = classNames({
    [classes.column]: true,
    [classes.drop]: drop,
  });

  return (
    <div
      className={columnClass}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDrop={() => {
        // console.log(draggedTask);
        moveTask(draggedTask!, props.state);
        setDraggedTask(null);
        setDrop(false);
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
    >
      <div className={classes.titleWrapper}>
        <p className={classes.state}>{props.state}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <BiMessageAdd size={24} />
        </button>
      </div>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
      {open && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <TextField
              id="outlined-basic"
              label="Enter Task"
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "rgb(228, 78, 245)",
                  },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "rgb(228, 78, 245)",
                },
              }}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "rgb(228, 78, 245)",
                "&:hover": {
                  backgroundColor: "rgba(228, 78, 245, 0.8)",
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              onClick={() => {
                addTask(text, props.state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
