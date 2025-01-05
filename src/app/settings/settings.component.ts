import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  settings = {
    threshold: '',
    apiEndpoint: '',
    retryAttempts: '',
  };

  isSaving: boolean = false; // Flag for showing spinner
  successMessage: string = ''; // Success message

  saveSettings(): void {
    // Start the spinner
    this.isSaving = true;

    // Simulate saving process with a 3-second delay
    setTimeout(() => {
      this.isSaving = false; // Stop the spinner
      this.successMessage = 'Settings saved successfully!'; // Show success message

      // Clear the success message after 3 seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }, 3000);
  }
}
