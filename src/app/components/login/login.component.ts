import { Component } from '@angular/core';
import { Login, ResponseModel } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  constructor(private roomSrv:RoomService,private messageService: MessageService,private router:Router){}

  loginObj:Login = {
    "phone": "",
    "password": ""
  };

  onLogin(){
    this.roomSrv.login(this.loginObj).subscribe((res:ResponseModel)=>{
      if(res.result){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfull' });
        localStorage.setItem('hotelUser',JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Check User Credentials' });
      }
    },(error:ResponseModel)=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Api Error' });
    })
  }
}
