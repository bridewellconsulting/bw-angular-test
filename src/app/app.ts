import { Component } from '@angular/core';
import { FeedbackList } from './feedback-list/feedback-list';
import { FEEDBACK_SERVICE_TOKEN } from './interfaces/feedback.service.interface';
import { FeedbackService } from './services/feedback.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FeedbackList
  ],
  providers: [
    { provide: FEEDBACK_SERVICE_TOKEN, useClass: FeedbackService }
  ],
  templateUrl: './app.html'
})
export class App {
}
