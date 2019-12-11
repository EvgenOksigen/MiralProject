import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuOpen() {
    if ($('.menu-icon').hasClass('menu-icon-active')) {
      $('.menu-icon').removeClass('menu-icon-active');
    } else {
      $('.menu-icon').addClass('menu-icon-active');
    };
  }

}
