import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  FormData: FormGroup;
  
  constructor(private builder: FormBuilder, private contact: ConnectionService) {}

  ngOnInit() {
    this.FormData = this.builder.group({
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


  onSubmit(FormData) {
    console.log(FormData)
    
    jQuery.ajax({
      url: "https://lp.wisofttechnologies.com/dev/cimeds/cimedmail.php",
      type: "POST",
      crossDomain: true,
      data: {
          fname: FormData.FullName,
          phone: FormData.PhoneNumber,
          email: FormData.Email,
          country: FormData.Country,
          city: FormData.City,
          department: FormData.department,
          enquirytype: FormData.EnquiryType,
          subject: FormData.Subject,
          message: FormData.Message,

      },
      cache: false,
      success: function(data) {
          console.log(data);
          $('.success').html("<div class='formstatus'>congrats! your form has been submitted</div>");
          
      }
  })

    this.contact.PostMessage(FormData)
      .subscribe(response => {
        
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
