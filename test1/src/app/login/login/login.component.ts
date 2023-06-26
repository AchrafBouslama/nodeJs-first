import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {
    email : '',
    password : ''
    }

    constructor(private _auth : AuthService,private router : Router){}

    ngOnInit(): void { }


    token: any;

login(email:string,password:string){

  this._auth.login(email,password).subscribe(
(res)=>{
this.token=res;
localStorage.setItem('token',this.token.myToken);
this.router.navigate(['/']);

},
(err)=>{

  console.log(err);
}


  )
};


}
