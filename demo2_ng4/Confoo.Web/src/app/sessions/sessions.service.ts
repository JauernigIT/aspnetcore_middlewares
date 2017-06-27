import { EventEmitter } from '@angular/core';

import { Session } from "./session.model";

export class SessionsService {
    public sessionsChanged = new EventEmitter<Session[]>();
    public sessionSelected = new EventEmitter<Session>();

    private sessions: Session[] = [
        new Session(
            'Like a Fish in Water With ASP.NET Core', 
            '',
            'This session will bring you up to speed with all the goodness of ASP.NET Core, formerly known as ASP.NET 5, using a practical, demo-first approach: I am going to show you how to build an application for monitoring a fish tank! This ASP.NET release has the best new features seen in a long time. It not only supports development for a lightweight version of .NET called .NET Core, but for the first time you can also target non-Windows platforms. You will learn how this all works while I show you the internals of the fish tank app. You’ll also see how MVC has become better with tag helpers, view components and many more cool features.',
            '26.06.2017 11:45',
            60,
            'Roland Guijt'),
        new Session(
            'ASP.NET Core Middlewares', 
            '',
            'Middlewares sind das Herzstück einer jeden ASP.NET Core Anwendung, da mit diesen die Request/Response-Verarbeitung zentral gesteuert wird. Dieser Vortrag gibt zunächst einen Überblick über die Funktionalität, die .NET Core zum Aufbau der Request-Pipeline bietet und welche Middlewares von Haus aus genutzt werden können. Anhand praktischer Beispiele wird darauf aufbauend gezeigt, wie sich wirkungsvoll eigene Middlewares erstellen lassen, die eine ASP.NET Core Anwendung um sinnvolle Funktionen erweitern.',
            '26.06.2017 15:30',
            60,
            'Matthias Jauernig'),
        new Session(
            'Entity Framework Core in a Nutshell', 
            '',
            'Kurz mal ein paar Minuten Zeit und Lust das neue Entity Framework Core kennen zulernen? Dann sind Sie in dieser Session richtig! Kurz und bündig wird das Entity Framework Core in seiner neuesten Version vorgestellt. Diese Session richtet sich definitiv an Entwickler, die optimaler Weise sogar schon das „alte“ Entity Framework 4-6 kennen- muss aber nicht!',
            '26.06.2017 18:15',
            60,
            'Thorsten Kansy'),
        new Session(
            'Advanced TypeScript', 
            '',
            'TypeScript wächst und gedeiht. Gerade in Verbindung mit Angular gewinnt die Sprache schnell an Beliebtheit. Neue Sprachfeatures machen es dabei möglich, die dynamische Natur von JavaScript zunehmend besser in einem statischen Typsystem abzubilden. Wir betrachten die fortgeschrittenen Möglichkeiten, die uns TypeScript bietet und die über reine Typüberprüfung hinausgehen, z.B. asynchrone Programmierung mit async/await oder UI-Entwicklung mit React und JSX. Zusätzlich analysieren wir den aktuellen Stand von TypeScript als Sprache. Schlussendlich werfen wir einen Blick auf geplante Entwicklungen der Zukunft.',
            '27.06.2017 09:00',
            60,
            'Marius Schulz'),
        new Session(
            'Are Progressive Web Apps the Future of Web Development?', 
            '',
            'There’s been a lot of talk lately about Progressive Web Apps. The main purpose is to provide an app-like user experience. For those who haven’t heard of them, progressive web apps aim to bridge the gap between the mobile web and native apps by providing things like the ability to install, provide offline support, run background processes and send push notifications. What are the non-technical doubts about using it? How does it work? Is it worth to dig into PWA now? Johannes Weber shows PWA in action and is intended to answer all these questions.',
            '27.06.2017 15:30',
            60,
            'Johannes Weber')
    ];

    public getSessions(): Session[] {
        return this.sessions.slice();
    }

    public addSession(session: Session): void {
        this.sessions.push(session);
        this.sessionsChanged.emit(this.getSessions());
    }
}