import { create } from "zustand";

type Task = {
  title: string;
  state: string;
};

type Store = {
  tasks: Task[];
  draggedTask: string | null;

  addTask: (title: string, state: string) => void;
  deleteTask: (title: string) => void;
  setDraggedTask: (task: string | null) => void;
  moveTask: (title: string, state: string) => void;
};

export const useStore = create<Store>((set) => ({
  tasks: [
    // {
    //   title: "todo",
    //   state: "planned",
    // },
  ],
  draggedTask: null,

  addTask: (title, state) => {
    if (
      !title ||
      useStore.getState().tasks.some((task) => task.title === title)
    ) {
      return;
    }
    set((prevState) => ({
      tasks: [...prevState.tasks, { title, state }],
    }));
  },
  deleteTask: (title) => {
    set((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.title !== title),
    }));
  },
  setDraggedTask: (task) => {
    set({ draggedTask: task });
  },
  moveTask: (title, state) => {
    set((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.title === title ? { ...task, state } : task
      ),
    }));
  },
}));
