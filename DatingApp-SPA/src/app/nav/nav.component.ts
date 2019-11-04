import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};

  constructor(private service:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
  }
  login(){
    this.service.login(this.model).subscribe(res=>{
       this.alertify.success("Logged In Successfully!");
    },error=>{
      this.alertify.error(error); 
    })
  }
 loggedIn(){
  return this.service.loggedIn();
 }
 logout(){
   localStorage.removeItem('token');
  this.alertify.message('Logged out!');
   
 }
}
