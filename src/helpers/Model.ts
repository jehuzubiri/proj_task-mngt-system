//Note: This Model Helpers can be modular defend on how the proj is.

//ALL
export type NotifType = "success" | "info" | "warning" | "error";
export type DrawerConfigType = {
  isOpen: boolean;
  fType: "trashbin" | "addform";
  title: string;
};

//ACCOUNTS
export interface Person {
  id: string;
  isGoogle: boolean;
  givenname: string;
  imgUrl: string;
  username: string;
  password: string;
}

export type AccInitStateType = {
  accountList: Person[];
  accountDetails: Person | {};
  isLoggedin: boolean;
};

//TASKS Main
export interface SubTaskDetails {
  key: string; //subtask~date
  title: string;
  isDone: boolean;
}

export interface ImgDetails {
  key: string;
  title: string;
  url: string;
}

export type StatusOptTypes = "todo" | "inprog" | "completed";

export interface TaskDetails {
  key: string; //maintask~date
  dateCreated: string;
  title: string;
  status: StatusOptTypes;
  subtasks: SubTaskDetails[];
  imgatt: ImgDetails[];
}

export type TaskInitStateType = {
  taskList: TaskDetails[];
  taskTrash: TaskDetails[];
  taskSelKeys: string[];
  searchInput: string;
};
