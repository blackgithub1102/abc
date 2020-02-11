import { Component, OnInit, PipeTransform } from '@angular/core';
import * as firebase from 'firebase';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { stringify } from 'querystring';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  items = Array();
  filter = new FormControl('');
  select_search = '1';

  constructor() { 
  
  }
  countries:any[] = []
  ngOnInit() {
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

  searchBar() {
    var input, filter, table, tr, td, td1, td3, i, txtValue, txtValue1, txtValue3;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      td1 = tr[i].getElementsByTagName("td")[1];
      td3 = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        txtValue3 = td3.textContent || td3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }else if(txtValue1.toUpperCase().indexOf(filter) > -1){
          tr[i].style.display = "";
        }else if(txtValue3.toUpperCase().indexOf(filter) > -1){
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  searchBy(col: number) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[col];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  searchMulti() {
    var input, filter, table, tr, td, td1, td3, i, cb1, cb2, cb3, txtValue, txtValue1, txtValue3;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      td1 = tr[i].getElementsByTagName("td")[1];
      td3 = tr[i].getElementsByTagName("td")[3];
      cb1 = document.getElementById("c1");
      cb2 = document.getElementById("c2");
      cb3 = document.getElementById("c3");
      if (td) {
        txtValue = td.textContent || td.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        txtValue3 = td3.textContent || td3.innerText;
        if (cb1.checked == true) {
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          }else{
            tr[i].style.display = "none";
          }
        }else if (cb2.checked == true) {
          if (txtValue1.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          }else{
            tr[i].style.display = "none";
          }
        }else if (cb3.checked == true) {
          if (txtValue3.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          }else{
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
  
}
