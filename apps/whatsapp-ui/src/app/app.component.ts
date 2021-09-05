import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@whatsapp-clone/data';

@Component({
    selector: 'whatsapp-clone-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    todos: Todo[] = [];

    constructor(private httpClient: HttpClient) {
        this.fetch();
    }

    addTodo(): void {
        this.httpClient.post('api/add-todo', {}).subscribe(() => this.fetch());
    }

    fetch(): void {
        this.httpClient
            .get<Todo[]>('api/todos')
            .subscribe((response) => (this.todos = response));
    }
}
