import { create } from "zustand";

type Task = {
  title: string;
  state: string;
};

type Store = {
  tasks: Task[];
  addTask: (title: string, state: string) => void;
};

export const useStore = create<Store>((set) => ({
  tasks: [
    {
      title: "todo",
      state: "planned",
    },
  ],
  addTask: (title, state) => {
    set((prevState) => ({
      tasks: [...prevState.tasks, { title, state }],
    }));
  },
}));
