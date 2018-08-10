import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-new-component',
  template: `
  
  <form class = "login-form">
  <div>
	<div>
		<li>
			<label for='myid'>
        USER
				<input #myuser [disabled]='false' id = 'myid' type='text'>
				</label>
			</li>
		</div>
		<div>
			<li>
				<label [for]='myid'>
        PASSWORD
					<input #mypassword [disabled]='false' [id] = 'myid' type='text' >
					</label>
				</li>
      </div>
      <button class="login-button" (click)="onClick(myuser.value,mypassword.value)"> LOGIN </button>
      {{message}}
    </div>
    </form>
        `,
  styles: [
    `
  .text-sucess{
    color : green;
  }
  
  label { width: 200px; float: left; margin: 0 20px 0 0; }
  input { 
    width: 200px; 
    border: 1px solid #000; 
    padding: 15px; 
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 35px;}

div {
  width: 100%;  
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 3px;
  position: relative;
  z-index: 1;
}

.login-button{
  width : 200 px;
  padding : 50 px;
  background-color : #fff3d4; 
  layout-align : center;
}

 `
  ]
})
export class MyNewComponentComponent implements OnInit {

  public user = '';
  public user1 ;
  public url = window.location.href;
  public myid = 'TestID';
  public isDisabled = 'true';
  public message = ''
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick(user, password){
    console.log('user',user, password);
    this.message = 'User : ' + user;
    this.user1 = user;
    this.router.navigate(['/dashboard',user])
  }
}
