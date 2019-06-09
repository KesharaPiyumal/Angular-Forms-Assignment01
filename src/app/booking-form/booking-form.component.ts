import { Component, OnInit } from '@angular/core';
import {FormData} from './booking-form-data'


@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})

export class BookingFormComponent implements OnInit {
 
  formData: FormData={
     title:'',
     fullName:'',
     phoneNumber : null,
     mobileNumber:null,
     email : '',
     streetAddress : '',
     town : '',
     city : '',
     numberOfPeople :0,
     numberOfRooms : 0,
     arrivalDate : null,
     numberOfNight : 0,
     occupancy : '',
     addInfo : ''
  }
  
  constructor(){
  }

  ngOnInit():void {
  }

  onSubmit() : void{  
    console.log(JSON.stringify(this.formData)); 
  }

}
