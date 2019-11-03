import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() valuesFromHome:any;
model:any={};
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
register(){

}
cancel(){
  
}
}
