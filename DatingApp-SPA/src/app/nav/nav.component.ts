import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};

  constructor(private service:AuthService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.service.login(this.model).subscribe(res=>{
       this.alertify.success("Logged In Successfully!");
    },error=>{
      this.alertify.error(error); 
    },()=>{
     this.router.navigate(['/members']);
    });
  }
 loggedIn(){
  return this.service.loggedIn();
 }
 logout(){
   localStorage.removeItem('token');
   this.alertify.message('Logged out!');
   this.router.navigate(['/home']);
 }
}
