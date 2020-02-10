import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    firebase.auth().signOut().then(() => {
      this.router.navigate(['']);
    }).catch(function(error) {
      alert(error);
    });
  }

}
