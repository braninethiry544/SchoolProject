import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: '<h1>Hello {{name}}!</h1><button (click)="changeName()">Change name</button>'
})
export class AppComponent {
	name = 'Nicholas';

	constructor(private nameService: NameService) {}

	changeName() {
		this.name = this.nameService.getName();
	}
}
