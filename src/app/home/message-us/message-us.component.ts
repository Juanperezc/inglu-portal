import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-us',
  templateUrl: './message-us.component.html',
  styleUrls: ['./message-us.component.scss']
})
export class MessageUsComponent implements OnInit {

  contactForm: FormGroup;
  //phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  constructor(private fb: FormBuilder) { }

  // Form Validator
  ngOnInit() {
  	this.contactForm = this.fb.group({
      name: ['', Validators.required],
      //phone: ['', Validators.required, Validators.minLength[10],Validators.pattern(this.phoneNumber)],
      phone: ['', Validators.required, Validators.minLength[10],Validators.pattern("[0-9]*")],
      email: ['', Validators.email],
      message: ['', Validators.required],
    })
  }

}
