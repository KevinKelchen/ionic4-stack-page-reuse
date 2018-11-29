import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-core',
  templateUrl: './list-core.component.html',
  styleUrls: ['./list-core.component.scss']
})
export class ListCoreComponent implements OnInit {

  @Output() itemClicked: EventEmitter<number> = new EventEmitter<number>();

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; number: number; note: string; icon: string }> = [];

  ngOnInit() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        number: i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  onItemClicked(itemNumber: number) {
    this.itemClicked.emit(itemNumber);
  }
}
