import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  FormData1: FormGroup;
  
  constructor(private builder: FormBuilder, private contact: ConnectionService) {}

  ngOnInit() {
    this.FormData1 = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Country: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required]),
      EnquiryType: new FormControl('', [Validators.required]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required])
      //Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      
    });
  }


  onSubmit(FormData1) {
    console.log(FormData1)
    
    jQuery.ajax({
      url: "https://lp.wisofttechnologies.com/dev/cimeds/cimedmail.php",
      type: "POST",
      crossDomain: true,
      data: {
          fname: FormData1.FullName,
          phone: FormData1.PhoneNumber,
          email: FormData1.Email,
          country: FormData1.Country,
          city: FormData1.City,
          department: FormData1.department,
          enquirytype: FormData1.EnquiryType,
          subject: FormData1.Subject,
          message: FormData1.Message,

      },
      cache: false,
      success: function(data) {
          console.log(data);
          $('.success').html("<div class='formstatus'>congrats! your form has been submitted</div>");
          
      }
  })

    this.contact.PostMessage(FormData1)
      .subscribe(response => {
        
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
