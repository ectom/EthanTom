import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-thehome',
  templateUrl: './thehome.component.html',
  styleUrls: ['./thehome.component.css']
})
export class ThehomeComponent implements OnInit {

    email = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        subject: '',
        message: ''
    }
    constructor(private _api: ApiService) { }

    ngOnInit() {
    }
    sendMail(){
        this._api.sendMail(this.email)
    }
}
