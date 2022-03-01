import { Component, OnInit } from '@angular/core';

const ICON_TOGGLE_OFF = 'toggle_off';
const ICON_TOGGLE_ON = 'toggle_on';
@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  active: boolean = false;
  toggleIcon: string = ICON_TOGGLE_OFF;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.active = !this.active;
  }

}
