import { Component, Input } from '@angular/core';
import { Todo } from '@whatsapp-clone/data';

@Component({
    selector: 'whatsapp-clone-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

    @Input() todos: Todo[] = [];

}
