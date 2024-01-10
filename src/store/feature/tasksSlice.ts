import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskDetails, TaskInitStateType } from "@/helpers/Model";

const initialState: TaskInitStateType = {
  taskList: [],
  taskTrash: [],
  taskSelKeys: [],
  searchInput: "",
};

const tasksSlice = createSlice({
  name: "tasksstore",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskDetails>) => {
      state.taskList.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<TaskDetails>) => {
      const { key } = action.payload;
      state.taskList = [...state.taskList].map((i) => {
        if (i.key === key) {
          return action.payload;
        } else return i;
      });
    },
    deleteTask: (state, action: PayloadAction<TaskDetails>) => {
      const { key } = action.payload;
      state.taskList = [...state.taskList].filter((i) => i.key !== key);
      state.taskTrash.push(action.payload);
    },
    restoreTask: (state, action: PayloadAction<TaskDetails>) => {
      const { key } = action.payload;
      state.taskTrash = [...state.taskTrash].filter((i) => i.key !== key);
      state.taskList.push(action.payload);
    },
    emptyTrash: (state, action: PayloadAction<string>) => {
      state.taskTrash = [];
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    resetTaskStore: (state, action: PayloadAction<string>) => {
      state.taskList = [];
      state.taskTrash = [];
      state.taskSelKeys = [];
      state.searchInput = "";
    },
  },
});

const { reducer, actions } = tasksSlice;
export const {
  addTask,
  updateTask,
  deleteTask,
  restoreTask,
  emptyTrash,
  setSearchInput,
  resetTaskStore,
} = actions;
export default reducer;
