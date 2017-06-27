import { Speaker } from '../speakers/speaker.model';

export class Session {
    constructor (
        public title: string,
        public summary: string,
        public description: string,
        public date: string,
        public length: number,
        public speaker: string
    ) {}
}