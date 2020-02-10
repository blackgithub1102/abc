import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(
        user => {
          alert(`You are logged in as ${this.username}`);
          this.router.navigate(['homepage']);
          console.log(user)
        },
        err => {
          alert(err.message);
        }
      )

  }

}
