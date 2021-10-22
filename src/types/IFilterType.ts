export enum IFilterType {
  ALL,
  Pending,
  Completed,
}

export enum RequestStatus {
  REQUEST = 'REQUEST',
  COMPLETED = 'COMPLETED',
  FAIL = 'FAIL',
}

export enum RequestTypes {
  LOAD_DATA = 'LOAD_DATA',
  ADD_DATA = 'ADD_DATA',
  UPDATE_DATA = 'UPDATE_DATA',
  DELETE_DATA = 'DELETE_DATA',
}

export interface Request {
  status: RequestStatus;
  type: RequestTypes;
  id?: number;
}
