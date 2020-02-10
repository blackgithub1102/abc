import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username ='';
  password ='';
  password2 = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRegister(){
    if (this.password == this.password2) {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(e =>{
        alert("Đăng kí thành công - Nhấn OK để chuyển đến đăng nhập");
        this.router.navigate(['']);   
      }).catch(error =>{
        alert(error.message);
      });
    }else{
      alert("Xác nhận mật khẩu không đúng")
    }
  }
}
