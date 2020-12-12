interface ITodo {
  token: string,
  userInfo: any
}

interface IState {
  token: string;
  isAuthenticated:boolean;
  userInfo: any;
  list: ITodo[]
}

enum TODO_STATUS {
  WAITING = 'waiting',
  DOING = 'doing',
  FINISHED = 'finished'
}

export {
  ITodo,
  IState,
  TODO_STATUS
}
