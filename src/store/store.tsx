import { create } from "zustand";

type Task = {
  title: string;
  state: "planned" | "ongoing" | "done";
};

type Store = {
  tasks: Task[];
};

export const useStore = create<Store>((set) => ({
  tasks: [
    {
      title: "todo",
      state: "planned",
    },
    {
      title: "todo2",
      state: "ongoing",
    },
    {
      title: "todo3",
      state: "done",
    },
  ],
}));
