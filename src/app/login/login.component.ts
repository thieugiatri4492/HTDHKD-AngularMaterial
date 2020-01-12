import { Component, OnInit } from '@angular/core';

import  {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'login-section',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    sessionStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }


 
}
