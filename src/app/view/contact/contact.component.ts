import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../service/country.service";
import {CountryDTO} from "../../model/dto/country-dto";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  readonly SRC_IMG: string = 'assets/img/avatar.png';

  form!: FormGroup;
  countryList: CountryDTO[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.initCountryList();

    this.form.get('ddi')?.valueChanges.subscribe(() => {
      this.markDdiInvalid();
    });

    this.form.get('phone')?.valueChanges.subscribe(() => {
      this.markDdiInvalid();
    });
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/jonathanssm', '_blank');
  }

  openGitHub(): void {
    window.open('https://github.com/jonathanssm', '_blank');
  }

  initCountryList(): void {
    this.countryService.findAll().subscribe(resp => {
      this.countryList = resp;
    });
  }

  sendEmail(): void {
    const ddi = this.form.get('ddi')?.value.replace('+', '');

    console.log(this.form.value);
    console.log(ddi);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      ddi: [''],
      phone: ['', [Validators.pattern('[0-9]{11}')]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required]]
    });
  }

  private markDdiInvalid(): void {
    const ddiValue = this.form.get('ddi')?.value;

    if (ddiValue && !this.countryList.find(country => country.ddi == ddiValue)) {
      this.form.get('ddi')?.markAsTouched();
      this.form.get('ddi')?.setErrors({'customError': true});
    }
  }

}
