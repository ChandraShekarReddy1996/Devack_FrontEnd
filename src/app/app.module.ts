import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NavbarComponent,
    DashBoardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : 'Register',
        component : RegisterComponent
      },
      {
        path : 'Login',
        component : MyNewComponentComponent
      },
      {
        path : 'dashboard/:user',
        component : DashBoardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
