import { Component,OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  constructor(public _auth:AuthService,private route: ActivatedRoute){}

  ngOnInit(): void {
}

  getTokenData(): any {
    return this._auth.getUserDataFromToken();
  }
}
