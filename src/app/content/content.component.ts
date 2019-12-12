import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';


@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }
  // onOpen(val) {
  //   if ($('#' + val).hasClass('open')) {
  //     $('#' + val).removeClass('open');
  //   } else {
  //     $('#' + val).addClass('open');
  //   }
  // }

}
