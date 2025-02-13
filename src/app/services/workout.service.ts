
import { Injectable } from '@angular/core';

   interface Workout {
     id: number;
     name: string;
     type: string;
     minutes: number;
   }

   @Injectable({ providedIn: 'root' })
   export class WorkoutService {
     private workouts: Workout[] = [];

     addWorkout(workout: Workout) {
       this.workouts.push({ ...workout, id: Date.now() });
     }

     getWorkouts(): Workout[] {
       return this.workouts;
     }
   }
  