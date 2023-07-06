import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments-tracker',
  templateUrl: './comments-tracker.component.html',
  styleUrls: ['./comments-tracker.component.css']
})
export class CommentsTrackerComponent {

  @Input() title?: string;
  @Input() total?: number;

}
