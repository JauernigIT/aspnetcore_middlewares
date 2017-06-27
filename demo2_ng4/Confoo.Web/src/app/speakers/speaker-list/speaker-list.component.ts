import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Speaker } from '../speaker.model';
import { SpeakersService } from "../speakers.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {
  private speakers: Speaker[];

  constructor (
    private readonly speakersService: SpeakersService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.speakers = this.speakersService.getSpeakers();

    let initialSpeakerId = 1;
    this.route.params
        .subscribe((params) => {
          let id = params['id'] || initialSpeakerId;
          if (id) {
            let speakerIndex = this.speakers.findIndex((speaker) => speaker.id == id);
            let selectedSpeaker = this.speakers[speakerIndex >= 0 ? speakerIndex : 0];
            
            this.speakersService.speakerSelected.emit(selectedSpeaker);
            initialSpeakerId = null;
          }
        });
    
    this.speakersService.speakersChanged
        .subscribe((speakers: Speaker[]) => {
          this.speakers = speakers;
        });
  }
}
