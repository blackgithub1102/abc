import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  ngaytao = '';
  nguoitao = '';
  ghichu = '';
  hinhthucthanhtoan = '';
  bennhan = '';
  donvipheduyet = '';
  kyngansach = '';
  tucachphapnhan = 'null';
  thoihanthanhtoan = '';
  ccmail = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSave() {
    if (this.ngaytao == '') {
      alert("Vui lòng chọn ngày gởi");
    } else if (this.nguoitao == '') {
      alert("Vui lòng nhập tên người tạo");
    } else if (this.hinhthucthanhtoan == '') {
      alert("Vui lòng chọn hình thức thanh toán");
    } else if (this.bennhan == '') {
      alert("Vui lòng nhập tên người nhận");
    } else if (this.donvipheduyet == '') {
      alert("Vui lòng chọn đơn vị phê duyệt");
    } else if (this.kyngansach == '') {
      alert("Vui lòng chọn kỳ ngân sách");
    }else if (this.thoihanthanhtoan == '') {
      alert("Vui lòng chọn thời hạn thanh toán");
    } else {
      firebase.firestore().collection("form")
        .add({
          ngaytao: this.ngaytao,
          nguoitao: this.nguoitao,
          ghichu: this.ghichu,
          hinhthucthanhtoan: this.hinhthucthanhtoan,
          bennhan: this.bennhan,
          donvipheduyet: this.donvipheduyet,
          kyngansach: this.kyngansach,
          tucachphapnhan: this.tucachphapnhan,
          thoihanthanhtoan: this.thoihanthanhtoan,
          ccmail: this.ccmail
        })
        .then(docRef => this.router.navigate(['home']))
        .catch(error => console.log(error));
    }
  }
}
