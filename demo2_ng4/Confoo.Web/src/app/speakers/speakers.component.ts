import { Component, OnInit } from '@angular/core';
import { Speaker } from './speaker.model';
import { SpeakersService } from "./speakers.service";

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  providers: [SpeakersService]
})
export class SpeakersComponent implements OnInit {
  private selectedSpeaker: Speaker;

  constructor(
    private readonly speakersService: SpeakersService
  ) { }

  ngOnInit() {
    this.speakersService.speakerSelected
        .subscribe((speaker: Speaker) => {
          this.selectedSpeaker = speaker;
        })
  }
}
