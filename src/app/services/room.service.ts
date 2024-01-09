import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rooms, Login, ResponseModel, HotelUser, Customers } from '../models/hotel';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  login(obj:Login):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.LOGIN,obj);
  }
  getAllRooms():Observable<ResponseModel>{
    return this.http.get<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.GETALLROOMS);
  }
  saveUpdateRooms(obj:Rooms[]):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.ADDUPDATEBULKROOMS,obj);
  }
  deleteRoom(id:number):Observable<ResponseModel>{
    return this.http.delete<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.DELETEROOMBYROOMID+ id);
  }
  getAllCustomers():Observable<ResponseModel>{
    return this.http.get<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.GETALLCUSTOMERS);
  }
  updateCustomer(obj:Customers):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.ADDUPDATECUSTOMER,obj);
  }
  deleteCustomer(id:number):Observable<ResponseModel>{
    return this.http.delete<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.DELETECUSTOMERBYID+id);
  }
  getAllUsers():Observable<ResponseModel>{
    return this.http.get<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.GETALLUSERS);
  }
  updateUser(obj:HotelUser):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.UPDATEUSER,obj);
  }
  deleteUser(id:number):Observable<ResponseModel>{
    return this.http.delete<ResponseModel>(environment.ApiEndPoints+CONSTANT.ENDPOINTS.DELETEUSER+id);
  }



}
