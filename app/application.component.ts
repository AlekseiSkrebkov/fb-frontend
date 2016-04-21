import {QuestionsService} from "./services/questions.service";
import {Component} from "angular2/core";
import {QuestionsSet} from "./questions-set/questionsset.component";
import {QuestionsSetComponent} from "./question/questionsset.component";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "angular2/router";
import {QuestionaryComponent} from "./answer/questionary.component";

@Component({
    selector: "app",
    template: `
        <div id="app">
            <nav>
                <a [routerLink]="['Questions']">Questions</a><br/>
                <a [routerLink]="['Questionary']">Questionary</a>
            </nav>
        </div>
        <router-outlet></router-outlet>`,
    directives: [QuestionsSetComponent, ROUTER_DIRECTIVES],
    providers: [QuestionsService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: "/questions",
        name: "Questions",
        component: QuestionsSetComponent
    },
    {
        path: "/questionary",
        name: "Questionary",
        component: QuestionaryComponent
    }
])
export class ApplicationComponent {
}