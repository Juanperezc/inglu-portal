import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GlobalService } from "../../services/GlobalService.service";
import { ContactService } from "../../services/ContactService.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  //phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  // Form Validator
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      type: ["join", Validators.required],
      last_name: ["", Validators.required],
      date_of_birth: ["", Validators.required],
      gender: ["", Validators.required],
      //phone: ['', Validators.required, Validators.minLength[10],Validators.pattern(this.phoneNumber)],
      phone: [
        "",
        Validators.required,
        Validators.minLength[10],
        Validators.pattern("[0-9]*"),
      ],
      email: ["", Validators.email],
      message: ["", Validators.required],
      id_card: ["", Validators.required, Validators.minLength[4]],
      //help: ['', Validators.required],
    });
  }

  async submit(form: FormGroup) {
    console.log("submit", form.value);

    if (form.valid) {
      let formValue = form.value;
      formValue.date_of_birth = formValue.date_of_birth
        ? GlobalService.formatDate(formValue.date_of_birth)
        : null;
      try {
        console.log("formValue", formValue);
        GlobalService.ShowSweetLoading();
        const contact: any = await this.contactService.store(formValue);
        GlobalService.CloseSweet();
        GlobalService.SwalCreateItem("Recibimos tu solicitud","Te estaremos contactando en los proximos dias");
        this.contactForm.reset();
      } catch (error) {
        console.error("error", error);
        GlobalService.CloseSweet();
      }
    }
  }
}
