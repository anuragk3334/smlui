import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings = {
    threshold: '',
    apiEndpoint: '',
    retryAttempts: '',
    selectedPrediction:'AI Enabled'
  };

  

  isSaving: boolean = false; // Flag for showing spinner
  successMessage: string = ''; // Success message
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    console.log("constructor initiated");
  }

  ngOnInit(): void {
    console.log("Settings component initialized --ngOninit");
    this.httpClient.get("https://saff-ml-fmcvgeb8btafd6gf.westeurope-01.azurewebsites.net/settings").subscribe((response:any) => {
      this.settings.threshold = response['threshold'];
      this.settings.apiEndpoint = response['apiEndpoint'];
      this.settings.retryAttempts = response['retryAttempts'];
      this.settings.selectedPrediction = response['selectedPrediction'];
    }, (error) => {
      console.log('Error fetching settings from the server');
      this.successMessage = 'Something went wrong !'; 
      this.isSaving = false; // Show success message
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    });
  }



  saveSettings(): void {
    // Start the spinner
    this.isSaving = true;
    this.httpClient.put("https://saff-ml-fmcvgeb8btafd6gf.westeurope-01.azurewebsites.net/updateSettings", this.settings).subscribe((response:any) => {
    this.settings = response;
    this.isSaving = false; // Stop the spinner
      this.successMessage = 'Settings saved successfully!'; // Show success message
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    } , (error) => {
      console.log('Error saving settings to the server');
      this.successMessage = 'Something went wrong !';
      this.isSaving = false; // Show success message
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    });
    

    // // Simulate saving process with a 3-second delay
    // setTimeout(() => {
    //   this.isSaving = false; // Stop the spinner
    //   this.successMessage = 'Settings saved successfully!'; // Show success message

    //   // Clear the success message after 3 seconds
    //   setTimeout(() => {
    //     this.successMessage = '';
    //   }, 3000);
    // }, 3000);
  }
}
