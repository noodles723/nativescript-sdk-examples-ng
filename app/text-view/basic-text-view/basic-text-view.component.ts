import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'basic-text-view-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'text-view/basic-text-view/basic-text-view.component.html'
})

export class BasicTextViewComponent {


    public editState = true;
    public tvtext = "";


    disableTextView(){
        if(this.editState){
            this.editState = false;
        }
        else{
            this.editState = true;
        }
    }

    showText(){
        alert("Text: "+this.tvtext);
    }

}