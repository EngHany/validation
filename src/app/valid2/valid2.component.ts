import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, MinLengthValidator, MaxLengthValidator } from '@angular/forms';

@Component({
    selector: 'valid2',
    templateUrl: './valid2.component.html',
    styleUrls: ['./valid2.component.css']
})

export class valid2Component implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(50)]],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],//Validators.email,
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.valid) {
            alert('SUCCESS!! :-)');
            return;
        }
else{
    alert('not SUCCESS!! :-)');
    return;
}
        
    }
}