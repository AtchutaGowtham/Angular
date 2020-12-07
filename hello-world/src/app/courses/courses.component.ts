import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: [ './courses.component.css' ]
})
export class CoursesComponent implements OnInit {
	courseTitle: string;
	imageUrl = 'http://lorempixel.com/400/200';
	colspan = 2;
	isActive = false;
	courses;
	twoWayBindingEmail = 'Enter a mail ID';
	course = {
		title: 'Angular',
		rating: 4.5,
		students: 22222,
		price: 9.99,
		releaseDate: new Date(2016, 3, 1)
	};

	constructor(coursesService: CoursesService) {
		this.courses = coursesService.getCourses();
	}

	ngOnInit(): void {}

	getCourseTitle() {
		return (this.courseTitle = 'List of Courses');
	}

	onSave($event) {
		$event.stopPropagation();
		console.log('Button was clicked', $event);
	}

	onDivClicked() {
		console.log('Div was clicked');
	}

	onKeyUp() {
		console.log('Enter was pressed');
	}

	onEnterWithoutTemplateVariable($event) {
		console.log($event.target.value);
	}

	onEnterWithTemplateVariable(email) {
		console.log(email);
	}

	onEnterWithTwoWayBinding() {
		console.log(this.twoWayBindingEmail);
	}
}
