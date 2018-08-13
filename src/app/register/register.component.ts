import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  onlogin(){
    this.router.navigate(['/Login'])
  }
  register(firstname,lastname,phone,password){
    console.log("First Name: ", firstname,"\nLast Name: ",lastname,"\nPhone: ",phone,"\nPassword: ",password)
    this.router.navigate(['/Login'])
  }
}
