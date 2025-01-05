import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-claims',
  templateUrl: './test-claims.component.html',
  styleUrls: ['./test-claims.component.css']
})
export class TestClaimsComponent {
  selectedFile: File | null = null;
  loading: boolean = false;
  claimsData: any[] = [];
  displayedColumns: string[] = ['Claim_ID', 'Fraud_Prediction', 'Fraud_Probability'];

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile.name);
    }
  }

  onFileUpload(): void {
    if (this.selectedFile) {
      this.loading = true;
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post<any[]>('http://localhost:5003/predict', formData).subscribe(
        (response) => {
          console.log("response received");
          this.claimsData = response;
          this.loading = false;
        },
        (error) => {
          console.error('Error:', error);
          this.loading = false;
        }
      );
    }
  }
}