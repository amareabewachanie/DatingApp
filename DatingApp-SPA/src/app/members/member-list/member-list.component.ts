import { Component, OnInit } from '@angular/core';
import { User } from './../../_models/user'
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
    users:User[];
  constructor(private service:UserService,private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.users=data['users'];
    });
  }
// loadUsers(){
//   this.service.getUsers().subscribe((users:User[])=>{
//       this.users=users;
//       this.alertify.success('Users fetched successfully!');
//   },err=>{
//      this.alertify.error('Unable to fetch users,please try again!');
//   });
// }
}
