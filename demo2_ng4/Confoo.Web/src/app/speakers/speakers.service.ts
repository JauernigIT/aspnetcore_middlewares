import { EventEmitter } from "@angular/core";

import { Speaker } from "./speaker.model";

export class SpeakersService {
    public readonly speakersChanged = new EventEmitter<Speaker[]>();
    public readonly speakerSelected = new EventEmitter<Speaker>();

    private speakers: Speaker[] = [
        new Speaker(1, 'Matthias', 'Jauernig', 'Jauernig IT', 'Matthias ist freiberuflicher Senior Softwareentwickler/-architekt im Raum Frankfurt/Main. Seine Schwerpunkte liegen in der modernen Webentwicklung mit C#/.NET, .NET Core, ASP.NET MVC, Angular und HTML5/JavaScript. In seiner Freizeit testet er seine Ausdauer im Triathlon und bei der Erziehung seiner 2 Kinder.', 'mjauernig.jpg'),
        new Speaker(2, 'Johannes', 'Hoppe', 'Haus Hoppe ITS', 'Johannes Hoppe ist Autor des Buchs „Angular: Einstieg in die komponentenbasierte Entwicklung“. Er arbeitet als selbstständiger IT-Berater, Softwareentwickler und Trainer für Angular und TypeScript. Für seine Community-Tätigkeit rund ums Web wurde er mehrfach als Telerik Developer Expert (TDE) ausgezeichnet. Johannes ist Leiter der .NET User Group Rhein-Neckar und unterrichtet als Lehrbeauftragter. Johannes schreibt über seine Vorlesungen, Trainings und Vorträge in seinem Blog. (http://blog.johanneshoppe.de/)', 'jhoppe.jpg'),
        //new Speaker(3, 'Markus', 'Demmler', 'SDX AG', 'Markus Demmler ist Principal eXpert bei der SDX AG in München und unterstützt Enterprise-Kunden bei der Konzeption und Umsetzung skalierbarer Client- und Backend-Architekturen mit Fokus auf die Entwicklung von mobilen Business Apps auf Basis von Xamarin oder Cordova.', 'mdemmler.jpg'),
        new Speaker(4, 'Chuck', 'Norris', 'The One and Only!', 'Chuck Norris (* 10. März 1940 in Ryan, Oklahoma; eigentlich Carlos Ray Norris Jr.) ist ein US-amerikanischer Kampfkünstler, Action-Schauspieler und Buchautor. Größere Berühmtheit erlangte er als Filmgegner von Bruce Lee in Die Todeskralle schlägt wieder zu (1972) sowie durch die dreiteilige Kinofilmreihe Missing in Action (1984–1988) und die Fernsehserie Walker, Texas Ranger (1993–2001), bei der er auch als ausführender Produzent agierte.', 'cnorris.jpg')
    ];

    public getSpeakers(): Speaker[] {
        return this.speakers.slice();
    }

    public addSpeaker(speaker: Speaker) {
        this.speakers.push(speaker);
        this.speakersChanged.emit(this.getSpeakers());
    }
}