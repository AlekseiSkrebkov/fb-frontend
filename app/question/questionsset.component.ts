import {Component, OnInit} from "angular2/core";
import {Question} from "./question.entity";
import {QuestionComponent} from "./question.component";
import {QuestionsService} from "../services/questions.service";

@Component({
    selector: "questions-set",
    template: `
        <div id="questions-config">
            <div class="actions">
                Add new question: 
                <span class="btn" (click)="newQuestion(1)">Mark</span>
                <span class="btn" (click)="newQuestion(2)">Selection</span>
                <span class="btn" (click)="newQuestion(3)">Freetext</span>                
            </div>
            <div *ngIf="selectedQuestion" class='questions-form'>
                <input type="hidden" id="questionAction" />
                <edit-question [question]="selectedQuestion"> </edit-question><br>
                <button (click)="saveQuestion(selectedQuestion)">Save</button>
            </div>
            <ul class="questionsList">
                    <li class="questionSummary" *ngFor="#question of questions; #i=index;" (click)="select(question)">{{question.title}}<span class="deleteBadge" (click)="deleteQuestion(i)">X</span></li>
            </ul>       
        </div>
        
    `,
    styles: [`
        #questions-config {
            margin: 5;
        }
        .actions {
            margin: 10;
        }
        .questions-form {
            padding 10;
            border: solid 1px;
            padding: 5;
            width: 50%;
        }
        .btn {
            font-family: Arial;
            background-color: #eee;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: hand;
            width: 50px;
        }
        .questionsList {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .questionSummary {      
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .deleteBadge {
            float: right;
            display: inline-block;
            font-size: small;
            cursor: hand;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            border-radius: 0px 4px 4px 0px;
        }
        
    `],
    directives: [QuestionComponent]
})
export class QuestionsSetComponent implements OnInit {
    questions: Question[] = [];
    selectedQuestion: Question;

    constructor(private _questionsService: QuestionsService) {

    }

    ngOnInit():any {
        this.questions = this._questionsService.getQuestions()
    }

    select(question: Question){
        this.selectedQuestion = question;
    }

    newQuestion(type: number) {
        let question = new Question(type);
        this.select(question);

    }

    saveQuestion(question) {
        console.log(question.title);
        if (question.title === undefined || question.title == ""){
            alert("Title is empty");
        } else {
            this._questionsService.save(question);
        }
    }

    deleteQuestion(index) {
        this.questions.splice(index, 1);
    }

}