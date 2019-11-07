import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
    user:User;
    galleryOptions:NgxGalleryOptions[];
    galleryImages:NgxGalleryImage[];
  constructor(private userService:UserService,private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.user=data['user'];
    });
    this.galleryOptions=[
      {
        width:'500px',
        height:'500px',
        imagePercent:100,
        thumbnailsColumns:4,
        imageAnimation:NgxGalleryAnimation.Slide,
        preview:false
      }
    ];
    this.galleryImages=this.getImages();
  }
  getImages(){
    const imageUrls=[];
    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small:this.user.photos[i].url,
        medium:this.user.photos[i].url,
        big:this.user.photos[i].url,
        description:this.user.photos[i].description
      });  
    }
    return imageUrls;
  }
 // loadUser(){
   // this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user:User)=>{
    //  this.user=user;
      //this.alertify.success('User fetched Successfully!');
    //},err=>{
      //this.alertify.error("Unable to fetch this user, please try again!");
    //})
  //}

}
