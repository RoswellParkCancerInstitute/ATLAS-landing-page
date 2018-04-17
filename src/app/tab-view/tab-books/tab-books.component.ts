import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-books',
  templateUrl: './tab-books.component.html',
  styleUrls: ['./tab-books.component.scss']
})
export class TabBooksComponent implements OnInit {
items = [{
  name: 'Patient\'s Guide to Bladder Cancer',
  author: 'Dr. Khurshid A Guru ',
  icon: 'https://images-na.ssl-images-amazon.com/images/I/41zCXDuY%2BsL._SX398_BO1,204,203,200_.jpg',
  disabled: false,
  links: {
    amazon: 'https://www.amazon.com/Patients-Guide-Bladder-Cancer-Khurshid/dp/1548887404',
    pdf: null
  }
}];
  constructor() { }

  ngOnInit() {
  }

}
