import { CourseSevice } from './courses.servise';
import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent {

  filteredCourses: Course[] = [];

  courses: Course[] = [];

  filterBy: string;

  constructor(private courseSevice: CourseSevice){

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.courses = this.courseSevice.retrieveAll();
    this.filteredCourses = this.courses;
  }

  set filter(value: string){
  this.filterBy = value;
  // tslint:disable-next-line: max-line-length
  this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);

  }

  get filter(){
    return this.filterBy;
  }


}
