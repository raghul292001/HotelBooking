import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, numberAttribute } from '@angular/core';
import { ResponseModel, Rooms } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [MessageService]
})
export class RoomsComponent implements OnInit,DoCheck {
  roomList:Rooms[]=[];
 
  constructor(private roomSrv:RoomService,private messageService: MessageService){
  }
  ngOnInit(): void {
    this.getAllRoom();
  }
  ngDoCheck(): void {
   
  }
  getAllRoom(){
    this.roomSrv.getAllRooms().subscribe((res:ResponseModel)=>{
      this.roomList = res.data;
    })
  }
  saveRoom(){
    this.roomSrv.saveUpdateRooms(this.roomList).subscribe((res:ResponseModel)=>{
      if(res.result){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated Successful' });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
      }

    })

  }
  addNewRoom(){
    const roomObj = {
      "roomId": 0,
      "roomName": "",
      "isAcAvailable": false,
      "roomCapacity": 0,
      "isActive": false,
      "roomTariff": 0,
      "extensionNo": ""
    }
    this.roomList.push(roomObj);
    console.log(this.roomList);

  }
  onDelete(id:number){
    this.roomSrv.deleteRoom(id).subscribe((res:ResponseModel)=>{
      if(res.result){
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Deleted Successfully' });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
      }
    })
  }

}
