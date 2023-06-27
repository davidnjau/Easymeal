import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  /*
  constructor() { }

  ngOnInit() {
  }*/
  Reactiveform = new FormGroup({
    code: new FormControl({ value: 0, disabled: true }),
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    designation: new FormControl(""),
    gender: new FormControl("M"),
    isactive: new FormControl(true)
  });

}
