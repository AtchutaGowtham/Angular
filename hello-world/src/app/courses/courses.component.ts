import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: [ './courses.component.css' ]
})
export class CoursesComponent implements OnInit {
	courseTitle: string;
	constructor() {}

	ngOnInit(): void {}

	getCourseTitle() {
		return (this.courseTitle = 'List of Courses');
	}
}
