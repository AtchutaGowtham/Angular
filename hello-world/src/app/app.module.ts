import { SummaryPipe } from './Summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
	declarations: [ AppComponent, CoursesComponent, SummaryPipe ],
	imports: [ BrowserModule, FormsModule ],
	providers: [ CoursesService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
