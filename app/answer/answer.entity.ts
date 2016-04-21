import {Question} from "../question/question.entity";
export class Answer {
    question: Question;
    mark: number;
    values: string[];
    text: string;
    
    constructor(question: Question) {
        this.question = question;
    }
}