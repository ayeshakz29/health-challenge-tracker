import { Component } from '@angular/core';
   import { WorkoutService } from '../../services/workout.service';

   @Component({ selector: 'app-workout-list', templateUrl: './workout-list.component.html' })
   export class WorkoutListComponent {
     workouts = this.workoutService.getWorkouts();
     searchText = '';
     filterType = '';

     constructor(private workoutService: WorkoutService) {}
   }
   
