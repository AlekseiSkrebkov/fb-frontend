import {Component, Input} from "angular2/core";
import {Question} from "./question.entity";

@Component({
    selector: "edit-question",
    template: `         
         <div class="question-fields">
            <p>
                Title:
                <input [(ngModel)]="question.title" placeholder="your question"/>
            </p>
                  <div class="questionValues" *ngIf="question.type == 2">
                    Values:
                    <input [(ngModel)]="newListValue" id="newListValue" (keypress)="addValue($event)">
                    <ul id="values-list">
                        <li *ngFor="#listValue of question.values; #i = index" class="value">
                            {{listValue}} 
                            <span class="deleteBadge" (click)="deleteValue(i)">X</span>
                        </li>
                    </ul>
                </div>
         </div>   
            
    `,
    styles: [
        `   .question-fields p {
                padding: 5;
            }
            #values-list {
                padding: 5;
                list-style-type: none;
            }
            #values-list li {
                list-style-type: none;
            }
            .value {
                display: inline-block;
                background-color: #eee;
                border: none;
                padding: 5 0 0 5;
                border-radius: 4px;
                margin: 6px;
                width: 110px;
            }
            .deleteBadge {
                float: right;
                display: inline-block;
                font-size: small;
                cursor: hand;
                color: white;
                padding: 0.4em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -8px;
                top: -4px;
                height: 1.8em;
                border-radius: 0px 4px 4px 0px;
            }
            
        `
    ]

})
export class QuestionComponent {
    @Input()
    question: Question;
    newListValue: string;

    addValue(event) {
        if (event.keyCode == 13) {
            if (this.newListValue != '') {
                this.question.values.push(this.newListValue);
                //ToDo: clean value input field
                document.getElementById("newListValue").focus();
                this.newListValue = "";
            }
        }
    }

    deleteValue(valuePosition) {
        this.question.values.splice(valuePosition, 1);
    }
}