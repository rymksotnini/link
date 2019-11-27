import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-sign-up-popup',
  templateUrl: './sign-up-popup.component.html',
  styleUrls: ['./sign-up-popup.component.css']
})
export class SignUpPopupComponent implements OnInit {

  asOrganizer: boolean = false;
  asSponsor: boolean = false;
  onClick = new EventEmitter();


  constructor(public dialogRef: MatDialogRef<SignUpPopupComponent>) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close({asOrganizer : this.asOrganizer, asSponsor : this.asSponsor});
  }

  is_organizer(val:boolean) {

    this.asOrganizer = val;
    this.asSponsor =!val;
    console.log("clicked");
    this.onClick.emit({asOrganizer : this.asOrganizer, asSponsor : this.asSponsor});
    this.close();
  }
}

