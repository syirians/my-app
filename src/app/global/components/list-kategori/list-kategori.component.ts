import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '../../services/HttpClient';
import { Configuration } from '../../';

@Component({
  selector: 'app-list-kategori',
  templateUrl: './list-kategori.component.html',
  styleUrls: ['./list-kategori.component.scss']
})
export class ListKategoriComponent implements OnInit {
  breakpoint: any;
  listData: any[];
  dat: any[];
  items: any[];
  localPage: any[]
  constructor(
    private httpService: HttpClient,
  ) { }

  ngOnInit() {
    this.localPage = JSON.parse(localStorage.getItem('detailPage'));
    let local = localStorage.getItem('kategori');
    this.listData = [];
    this.dat = [];
    let section = Configuration.categories();
    this.onLoad(local);
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;

  }


  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

  filter(res, index) {
    let arr = res.filter(function (row) {
      return row.section == index;
    });
    return arr;
  }

  removeDuplicates(arr) {
    let unique_array = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != undefined) {
        if (unique_array.map(function (e) { return e; }).indexOf(arr[i].section) == -1) {
          unique_array.push(arr[i].section)
        }
      }

    }
    return unique_array
  }
  onLoad(local) {
    this.httpService.get(Configuration.get().API + '/v2/' + local + '.json?api-key=' + Configuration.apiKey()).toPromise()
      .then(res => {
        for (let i = 0; i < res.results.length; i++) {
          this.listData[i] = res.results[i];
          this.listData[i].published_date = new Date(res.results[i].published_date);
        }
        return res;
      }).then(res => {
        let hasil = {
          unikArr: this.removeDuplicates(res.results),
          result: res
        };
        return hasil;
      }).then(res => {
        for (let i = 0; i < res.unikArr.length; i++) {
          this.dat[i] = this.filter(res.result.results, res.unikArr[i]);
        }
      });
  }
  onShowPage(event) {
    console.log(event);
    localStorage.setItem('detailPage', JSON.stringify(event));
    window.open(event.url);
    // this.router.navigate(['detail-page']);
  }
}
