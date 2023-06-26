import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user = {
name : '',
email : '',
password : ''

}


  constructor(private _auth : AuthService,private router : Router){}
  ngOnInit(): void {
    
  }

  register (name:string,email:string,password:string) {

this._auth.register(name,email,password).subscribe(

(res)=>{
  console.log("successsssssssssssssssssss")
this.router.navigate(['login']);

}

);

}
}

