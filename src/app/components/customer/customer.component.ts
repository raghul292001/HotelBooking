import { Component, OnInit } from '@angular/core';
import { Customers, ResponseModel } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [MessageService]
})
export class CustomerComponent implements OnInit {
  customersList:Customers[]=[];
  customerObj:Customers={
      "custId": 0,
      "name": "",
      "mobileNo": "",
      "email": "",
      "aadharNo": "",
      "city": "",
      "address": ""
  }
  constructor(private roomSrv:RoomService,private messageService: MessageService){
  }
  ngOnInit(): void {
    this.getAllCustomer();
  }
  getAllCustomer(){
    this.roomSrv.getAllCustomers().subscribe((res:ResponseModel)=>{
      if(res.result){
        this.customersList = res.data;
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
      }
    })
  }
  onDelete(id:number){
    const isDelete = confirm('Are you sure want to Delete');
    if(isDelete){
      this.roomSrv.deleteCustomer(id).subscribe((res:any)=>{
        if(res.result){
          this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Deleted Successfully' });
          this.getAllCustomer();
        }else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
        }
      })
    }
  }
  onAddCustomer(){
    this.roomSrv.updateCustomer(this.customerObj).subscribe((res:any)=>{
      if(res.result){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated Successful' });
        this.getAllCustomer();
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
      }
    })
  }
  }
