import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [MessageService]
})
export class LayoutComponent implements OnInit {
  loggedUserData:any;
  constructor(private router:Router){
    const localData= localStorage.getItem('hotelUser');
    if(localData!=null){
      this.loggedUserData = JSON.parse(localData);
      console.log(this.loggedUserData);
    }
  }
  ngOnInit(): void {
    
  }
  onLogOff(){
    localStorage.removeItem('hotelUser');
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/login');
  }


}
