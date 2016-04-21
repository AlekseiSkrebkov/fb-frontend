export class Question {
    id: number;
    title: string;
    type: number;
    values: string[] = [];

    constructor(type: number) {
        this.type = type;
    }
}