import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { FormGroup, FormControl, Validators,
FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
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
  artistArray: any;
  musicForm: FormGroup;
  areas = this.musicForm;
  constructor(private dataService: DataService,
              private fb: FormBuilder,
              private router: Router) {
               this.artistArray = this.dataService.getData();
            //   this.artistArray = Object.entries(this.artistArray);


    }

 // tslint:disable-next-line:use-life-cycle-interface
 ngOnInit() {
  this.musicForm = this.fb.group({
    genre: ['', Validators.required],
    genre_id: ['', Validators.required],
    artists: this.initArtists()
  }); 
 }
 initArtists() {
   // initialize our artists
   return this.fb.group({
     artist_id: ['', Validators.required],
     artist: ['', Validators.required],
     selected: ['', Validators.required]
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
