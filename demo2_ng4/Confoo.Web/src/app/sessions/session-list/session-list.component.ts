import { Component, OnInit } from '@angular/core';

import { Session } from '../session.model';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  private sessions: Session[];

  constructor (
    private readonly sessionsService: SessionsService
  ) {}

  ngOnInit() {
    this.sessions = this.sessionsService.getSessions();
    this.sessionsService.sessionsChanged
        .subscribe((sessions: Session[]) => {
          this.sessions = sessions;
        });
  }
}
