import {Injectable} from "angular2/core";
import {Question} from "../question/question.entity";
@Injectable()
export class QuestionsService {
    questions: Question[] = [
        {
            id: null,
            title: "Q1",
            type: 1,
            values: null
        },
        {
            id: null,
            title: "Q2",
            type: 2,
            values: ["V1", "V2", "V3"]
        },
        {
            id: null,
            title: "Q3",
            type: 3,
            values: null
        },
        {
            id: null,
            title: "Q7",
            type: 1,
            values: null
        }
    ];

    getQuestions() {
        return this.questions;   
    }

    save(question) {
        this.questions.push(question);
        console.log('Service: ' + this.questions)
    }
}