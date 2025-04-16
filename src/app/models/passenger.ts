export interface Ipassenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: null | Ichildren[];
}

export interface Ichildren {
  name: string;
  age: number;
}
