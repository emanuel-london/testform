import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  data = 'assets/music.json';
  constructor(private http: HttpClient, protected localStorage: LocalStorage) { }


  getData() {
    return this.http.get(this.data);
}
}

