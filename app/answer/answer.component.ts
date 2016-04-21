import {Component, Input} from "angular2/core";
import {Question} from "../question/question.entity";
import {Answer} from "./answer.entity";

@Component({
    selector: "answer-form",
    template: `
        <div>
            <h3>Question: {{answer.question.title}}</h3>
            <div [ngSwitch]="answer.question.type">
                <div *ngSwitchWhen="1">
                    <span *ngFor="#i of [1, 2, 3, 4, 5]">
                        <input ([ngModel])="answer.mark" type="radio" name="marks" (click)="setMark(i)" value="{{i}}"> {{i}}
                    </span>    
                </div>
                <div *ngSwitchWhen="2">
                    <ul>
                        <li *ngFor="#value of answer.question.values">{{value}}</li>
                    </ul>
                </div>
                <div *ngSwitchWhen="3">
                     <input [(ngModel)]="answer.text"/>     
                </div>
            </div>
       </div>
    `
})
export class AnswerComponent {
    @Input()
    answer: Answer;

    setMark(mark) {
        this.answer.mark = mark;
        console.log("Mark: " + mark);
    }
}