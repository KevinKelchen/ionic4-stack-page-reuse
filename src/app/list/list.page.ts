import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavParamsService } from '../nav-params.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor(private router: Router, private navParamsService: NavParamsService) { }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  onItemClicked(number: number) {
    const navId = this.navParamsService.set({
      timeStamp: new Date().toLocaleString()
    });

    this.router.navigate(['/list-detail', number], { queryParams: { navId } });
  }
}
