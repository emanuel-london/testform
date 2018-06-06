import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Artist } from '../data/formData.model';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent {
 /* @Input() artist: Artist;
  data: any;
  musicForm: FormGroup;
  nameChangeLog: string[] = [];

  private url = 'assets/music.json';

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
     this.data = this.http.get(this.url);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
   this.createForm();
  }

createForm() {
    this.musicForm = this.fb.group({
     artistArray: this.fb.array([]), // <--- the FormArray called "name"
    });
  }

*/

//////////////////////// Test /////////////////////////////



checked: any;
  knows: any;
  artistArray: any;
  musicForm: FormGroup;
  areas = this.musicForm;
  constructor(private dataService: DataService,
              private fb: FormBuilder,
              private router: Router) {
               this.knows = this.dataService.getData();

              }

 // tslint:disable-next-line:use-life-cycle-interface
 ngOnInit() {
  this.musicForm = this.fb.group({
    artistArray: this.fb.array([])
  });


  }
  submit(areas) {
    console.log(areas);
    const vals = {};
    // parse/unparse data...weird, I know
    /*const term = JSON.stringify(areas.value);
    const userArea = JSON.parse(term);
    this.knows.forEach((item, index) => {
      if (userArea.knows[index]) {
       vals[index] = {

         tid: item.tid,
         name: item.name,
         class: item.field_css_class
       };
      }
    });*/
  }

  onChange(event, i) {
    const knows = <FormArray>this.musicForm.get('knows') as FormArray;
 }





}
