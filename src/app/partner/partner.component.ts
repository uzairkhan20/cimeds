import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  FormData2: FormGroup;
  
  constructor(private builder: FormBuilder, private contact: ConnectionService) {}

  ngOnInit() {
    this.FormData2 = this.builder.group({
      Company: new FormControl('', [Validators.required]),
      FullName: new FormControl('', [Validators.required]),
      Profession: new FormControl('', [Validators.required]),
      Organisation: new FormControl('', [Validators.required]),
      Country: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required])
      //Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      
      
    });
  }


  onSubmit(FormData2) {
    console.log(FormData2)
    
    jQuery.ajax({
      url: "https://lp.wisofttechnologies.com/dev/cimeds/cimedpartnersmail.php",
      type: "POST",
      crossDomain: true,
      data: {
          company: FormData2.Company,          
          fname: FormData2.FullName,
          profession: FormData2.Profession,
          organistaion: FormData2.Organisation,
          country: FormData2.Country,
          city: FormData2.City,
          phone: FormData2.PhoneNumber,
          email: FormData2.Email,
          subject: FormData2.Subject,
          message: FormData2.Message,

      },
      cache: false,
      success: function(data) {
          console.log(data);
          $('.success').html("<div class='formstatus'>congrats! your form has been submitted</div>");
          
      }
  })

    this.contact.PostMessage(FormData2)
      .subscribe(response => {
        
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
