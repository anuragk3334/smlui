import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-claims',
  templateUrl: './test-claims.component.html',
  styleUrls: ['./test-claims.component.css']
})
export class TestClaimsComponent {
  selectedCsvFile: File | null = null;
  selectedImageFiles: File[] = [];
  loading: boolean = false;
  claimsData: any[] = [];
  displayedColumns: string[] = ['Claim_ID', 'Fraud_Prediction', 'Fraud_Probability','OCR_Prediction','AI_CREATED_IMAGE'];
 

  constructor(private http: HttpClient) {}

  onCsvFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'text/csv') {
        this.selectedCsvFile = file;
        console.log('Selected CSV file:', this.selectedCsvFile.name);
      } else {
        alert('Please select a valid CSV file.');
      }
      input.value = ''; // Reset the input field to allow re-selection of the same file
    }
  }

  onImageFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      if (files.length > 3) {
        alert('You can only upload up to 3 images.');
        return;
      }
      this.selectedImageFiles = files.filter(file => file.type.startsWith('image/'));
      console.log('Selected image files:', this.selectedImageFiles.map(file => file.name).join(', '));
      input.value = ''; // Reset the input field to allow re-selection of the same files
    }
  }

  getSelectedImageFileNames(): string {
    return this.selectedImageFiles.map(file => file.name).join(', ');
  }

  uploadFiles(): void {
    if (!this.selectedCsvFile) {
      alert('Please select a CSV file.');
      return;
    }
    if (this.selectedImageFiles.length === 0) {
      alert('Please select at least one image file.');
      return;
    }

    this.loading = true;
    const formData = new FormData();
    formData.append('csvFile', this.selectedCsvFile);
    this.selectedImageFiles.forEach((file, index) => {
      formData.append(`imageFile${index + 1}`, file);
    });

    this.http.post<any[]>('https://saff-ml-fmcvgeb8btafd6gf.westeurope-01.azurewebsites.net/predict', formData).subscribe(
      (response) => {
        console.log("response received");
        this.claimsData = response;
        this.loading = false;
        this.selectedCsvFile = null;
        this.selectedImageFiles = [];
      },
      (error) => {
        console.error('Error:', error);
        this.loading = false;
        this.selectedCsvFile = null;
        this.selectedImageFiles = [];
      }
    );
  }
}