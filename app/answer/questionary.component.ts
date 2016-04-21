import {Component, OnInit} from "angular2/core";
import {Question} from "../question/question.entity";
import {QuestionsService} from "../services/questions.service";
import {Answer} from "./answer.entity";
import {AnswerComponent} from "./answer.component";
@Component({
    selector: "questionary",
    template: `
        <div id="questionary" *ngIf="answers.length > 0">
            <h2>Answer the questions:</h2>
            <answer-form [answer]="currentAnswer"></answer-form>
            <div style="margin: 8">
                <span class="nav-btns" (click)="prevQuestion()">Previous</span>
                <span class="nav-btns" (click)="nextQuestion()">Next</span>
            </div>           
            <p *ngFor="#answer of answers">{{answer.question.title}}: {{answer.mark}}, {{answer.values}}, {{answer.text}}</p>
        </div>
        <p *ngIf="answers.length == 0">No questions</p>
    `,
    styles: [`
        .nav-btns {
            background-color: lightblue;
            border-radius: 4px;
            padding: 2px;
            cursor: hand;
        }    
    `],
    directives: [AnswerComponent]
})
export class QuestionaryComponent implements OnInit{
    answers: Answer[] = [];
    currentQuestionNum = 0;
    currentAnswer: Answer;

    constructor(private _questionsService: QuestionsService) {
    }

    ngOnInit():any {
        let questions = this._questionsService.getQuestions();
        for (let i=0; i<questions.length-1; i++) {
            this.answers.push(new Answer(questions[i]));
        }
        if (this.answers.length > 0) {
            this.setCurrentAnswer();
        }

    }

    nextQuestion() {
        this.currentQuestionNum ++;
        if (this.currentQuestionNum >= this.answers.length)
            this.currentQuestionNum = 0;
        console.log("cur_num: " + this.currentQuestionNum + " length:" + this.answers);
        this.setCurrentAnswer();
    }

    prevQuestion() {
        this.currentQuestionNum --;
        if (this.currentQuestionNum < 0)
            this.currentQuestionNum = this.answers.length-1;
        console.log("cur_num: " + this.currentQuestionNum + " length:" + this.answers);
        this.setCurrentAnswer();
    }

    setCurrentAnswer() {
        this.currentAnswer = this.answers[this.currentQuestionNum];
    }

}