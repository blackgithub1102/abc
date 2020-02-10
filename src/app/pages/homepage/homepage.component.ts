import { Component, OnInit, PipeTransform } from '@angular/core';
import * as firebase from 'firebase';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

interface Records {
  ngaytao: string;
  nguoitao: string;
  hinhthucthanhtoan: string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DecimalPipe]
})
export class HomepageComponent implements OnInit {
  items = Array();
  countries$: Observable<Records[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) { 
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

  this.countries$ = this.filter.valueChanges.pipe(
    startWith(''),
    map(text => this.onSearch(text, pipe))
    );
  }

  ngOnInit() {
    
  }

  onSearch(text: string, pipe: PipeTransform): Records[] {
    return this.items.filter(record => {
      const term = text.toLowerCase();
      return record.ngaytao.toLowerCase().includes(term)
          || pipe.transform(record.ngaytao).includes(term)
          || pipe.transform(record.hinhthucthanhtoan).includes(term);
    });
  }
  
}
