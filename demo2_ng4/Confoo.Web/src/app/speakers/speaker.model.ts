export class Speaker {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public company: string,
        public resumee: string,
        public imageFileName: string
    ) {}

    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    public getFullImagePath() {
        return '/dwx_speakers/' + this.imageFileName;
    }
}