import { SummaryPipe } from './Summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TextDirectiveComponent } from './text-directive/text-directive.component';

@NgModule({
	declarations: [ AppComponent, CoursesComponent, SummaryPipe, FavoriteComponent, TextDirectiveComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [ CoursesService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
