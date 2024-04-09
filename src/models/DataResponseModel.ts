export interface DataResponseModel<T> {
  data: {
    data: T;
    message: string;
    code: string;
  };
  status: number;
}

export interface DataListResponseModel<T> {
  data: {
    code: string;
    message: string;
    data: {
      data: T;
      totalCount: number;
    };
  };
  status: number;
}
