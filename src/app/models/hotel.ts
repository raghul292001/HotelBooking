export interface Login {
    phone: string;
    password: string;
  }
  
export interface ResponseModel {
    message: string;
    result: boolean;
    data: any;
}

export interface HotelUser {
  userId: number;
  userName: string;
  password: string;
  role: string;  
}

export interface Rooms {
  roomId: number;
  roomName: string;
  isAcAvailable: boolean;
  roomCapacity: number;
  isActive: boolean;
  roomTariff: number;
  extensionNo: string;
}
export interface Customers {
  custId: number;
  name: string;
  mobileNo: string;
  email: string;
  aadharNo: string;
  city: string;
  address: string;
}

