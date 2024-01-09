import { Component, OnInit } from '@angular/core';
import { HotelUser, ResponseModel } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService]
})
export class UsersComponent implements OnInit {
  userList:HotelUser[]=[];
  userObj:HotelUser={
      "userId": 0,
      "userName": "",
      "password": "",
      "role": ""
  }
  constructor(private roomSrv:RoomService,private messageService: MessageService){}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.roomSrv.getAllUsers().subscribe((res:any)=>{
      if(res.result){
        this.userList = res.data;
      }else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
      }
    })

  }
  onSaveUser(){
    this.roomSrv.updateUser(this.userObj).subscribe((res:any)=>{
      if(res.result){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated Successful' });
        this.getAllUsers();
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
      }
    })
  }
  onDelete(id:number){
    const isDelete = confirm('Are you sure want to Delete');
    if(isDelete){
      this.roomSrv.deleteUser(id).subscribe((res:any)=>{
        if(res.result){
          this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Deleted Successfully' });
          this.getAllUsers();
        }else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
        }
      })
    }
  }
  onEdit(data:any){
    const strObj = JSON.stringify(data);
    this.userObj=JSON.parse(strObj);
  }
}
