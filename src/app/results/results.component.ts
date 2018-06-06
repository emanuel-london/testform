import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  user = {
    skills: [
      { name: 'JS',  selected: true, id: 12 },
      { name: 'CSS',  selected: false, id: 2 },
    ]
  };
  // tslint:disable-next-line:member-ordering
  form;
  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  constructor(private fb: FormBuilder) {
     console.clear();

     this.form = this.fb.group({
       skills: this.buildSkills()
     });

     console.log(this.form.get('skills'));
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }


  buildSkills() {
    const arr = this.user.skills.map(s => {
      return this.fb.control(s.name);
      // return this.fb.group({
      //   selected: [s.selected],
      //   id: [s.id]
      // }
    });
    return this.fb.array(arr);
  }

  submit(value) {

    const f = Object.assign({}, value, {
      skills: value.skills.map((s, i) => {
      return {
        id: this.user.skills[i].id,
        name: s
      };
    }),
    });

     console.log(f);
  }


}
