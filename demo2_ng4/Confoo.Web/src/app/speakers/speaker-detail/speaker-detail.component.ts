import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from "app/speakers/speaker.model";

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.css']
})
export class SpeakerDetailComponent implements OnInit {
  @Input() speaker: Speaker;

  ngOnInit() {
  }

}
