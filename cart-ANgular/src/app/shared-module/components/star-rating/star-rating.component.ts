import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {

  @Input() rating = 0;
  starWidth = 0;

  constructor() {}

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
