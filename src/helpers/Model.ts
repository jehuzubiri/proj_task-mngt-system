export interface Person {
  id: string;
  isGoogle: boolean;
  givenname: string;
  imgUrl: string;
  username: string;
  password: string;
}

export type MainInitStateType = {
  accountList: Person[];
  accountDetails: Person | {};
  isLoggedin: boolean;
};
