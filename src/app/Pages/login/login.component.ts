import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform:any={
    username:"",
    password:""
  }
  constructor(private route:Router, private messageService: MessageService) {
  }

  login(){
    debugger
    if(this.loginform.username="pawan8888" || this.loginform.password=="8888")
    {
      this.route.navigateByUrl('/template')
      this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });

    }
    else{


  }
}
}
