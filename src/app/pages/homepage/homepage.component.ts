import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items = Array();
  constructor() { 
    firebase.firestore()
    .collection('form')
    .get()
    .then((snapshot) => {
    snapshot.forEach((doc) => {
      let Obj = {} as any;
      Obj.ngaytao = doc.data().ngaytao;
      Obj.nguoitao = doc.data().nguoitao;
      Obj.hinhthucthanhtoan = doc.data().hinhthucthanhtoan;
      Obj.bennhan = doc.data().bennhan;
      Obj.donvipheduyet = doc.data().donvipheduyet;
      Obj.kyngansach = doc.data().kyngansach;
      Obj.tucachphapnhan = doc.data().tucachphapnhan;
      Obj.thoihanthanhtoan = doc.data().thoihanthanhtoan;
      Obj.ghichu = doc.data().ghichu;
      Obj.ccmail = doc.data().ccmail;
      this.items.push(Obj);
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  }

  ngOnInit() {
    
  }

  
  
}
