import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.entity';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user:User = new User();
  message:String = "Input User Name!";
  username:string = "";
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  signIn(){
    const params:Map<string,any> = new Map();
    params.set("user",this.user);
    this.authService.authentication(params).subscribe({
      next:(data)=>{
        if(data){
          this.router.navigate(["/user",data.id]);
        }else{
          this.message = "Wrong user name";
        }
      },
      error:(err)=>{},
      complete: ()=>{}
    })
  }

}
