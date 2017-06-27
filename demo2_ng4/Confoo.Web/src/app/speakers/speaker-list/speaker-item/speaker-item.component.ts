import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Speaker } from '../../speaker.model';
import { SpeakersService } from "../../speakers.service";

@Component({
  selector: 'app-speaker-item',
  templateUrl: './speaker-item.component.html',
  styleUrls: ['./speaker-item.component.css']
})
export class SpeakerItemComponent implements OnInit {
  @Input() speaker: Speaker

  constructor(
    private readonly speakersService: SpeakersService
  ) { }

  ngOnInit() {
  }

  onSpeakerSelect() {
    this.speakersService.speakerSelected.emit(this.speaker);
  }
}
