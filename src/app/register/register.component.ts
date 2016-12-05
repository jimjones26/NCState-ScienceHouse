import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  roleName: string= 'Customer';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  isPasswordMatch() {
    const formValue = this.form.value;
    return formValue && formValue.password && formValue.password === formValue.confirm;
  }

  signUp() {
    const val = this.form.value;
    const rn = this.roleName;

    this.authService.signUp(val.email, val.password, rn)
      .subscribe(
      () => {
        console.log('User created successfully!');
        this.router.navigateByUrl('/complete-profile');
      },
      err => alert(err)
      );
  }
}
