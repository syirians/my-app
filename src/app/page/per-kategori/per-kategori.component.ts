import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../global/services/HttpClient';
import { Configuration } from '../../global';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-per-kategori',
  templateUrl: './per-kategori.component.html',
  styleUrls: ['./per-kategori.component.scss']
})
export class PerKategoriComponent implements OnInit {
  breakpoint: any;
  listData: any[];
  dat: any[];
  items: any[];
  constructor(
    private httpService: HttpClient,
    private router: Router,

  ) { }

  ngOnInit() {
    let local = localStorage.getItem('kategori');
    console.log(local);
    this.listData = [];
    this.dat = [];
    let section = Configuration.categories();
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
  onShowPage(event) {
    console.log(event);
    localStorage.setItem('detailPage', JSON.stringify(event));
    window.open(event.url);
    // this.router.navigate(['detail-page']);
  }
}
