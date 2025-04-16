export interface Iproduct {
  pname: string;
  pdetails: string;
  pid: string;
  pstatus: ProductStatus;
}

export enum ProductStatus {
  InProgress = 'InProgress',
  Dispatched = 'Dispatched',
  Delivered = 'Delivered',
}
