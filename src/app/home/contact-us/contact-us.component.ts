import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  //phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  constructor(private fb: FormBuilder) { }

  // Form Validator
  ngOnInit() {
  	this.contactForm = this.fb.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      //phone: ['', Validators.required, Validators.minLength[10],Validators.pattern(this.phoneNumber)],
      phone: ['', Validators.required, Validators.minLength[10],Validators.pattern("[0-9]*")],
      email: ['', Validators.email],
      message: ['', Validators.required],
      cedula: ['', Validators.required,Validators.minLength[4]],
      //help: ['', Validators.required],
    })
  }

}
