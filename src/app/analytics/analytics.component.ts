import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  claimId:string='';
  isLoading:boolean=false;
  displayedColumns: string[] = ['Claim_ID', 'Fraud_Detection','Fraud_Detection_Reason', 'Fraud_Prediction', 'OCR_Prediction'];
  claimsData: any[] = [];
  images:{key:string;url:string}[]=[];
  selectedImageUrl: string | null = null;
  sanitizedUrl: SafeResourceUrl | null = null;

  @ViewChild('dialogTemplate') dialogTemplate!:TemplateRef<any>;

  constructor(private http:HttpClient ,private dialog:MatDialog ,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }


  searchImages(): void {
    console.log(this.claimId);
     if (!this.claimId) {
      alert('Please enter a claim ID');
      return;
    }
    this.isLoading = true;
 
    const apiCall1 = this.http.get<any[]>(`http://ec2-13-54-37-41.ap-southeast-2.compute.amazonaws.com/search-images?claim_id=${this.claimId}`);
    const apiCall2 = this.http.get<any[]>(`http://ec2-13-54-37-41.ap-southeast-2.compute.amazonaws.com:80/claimDetails?claim_id=${this.claimId}`);
  
    forkJoin([apiCall1, apiCall2]).subscribe(
      ([imagesResponse, columnsResponse]) => {
        this.images = imagesResponse;
        
        this.claimsData = [columnsResponse];
        console.log("claims data is :") 
        console.log(columnsResponse) 
        this.isLoading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }

  // searchImages(){
  //   console.log(this.claimId);
  //   if (!this.claimId) {
  //     alert('Please enter a claim ID');
  //     return;
  //   }

  //   this.isLoading=true;
  //   this.images=[];
  //   // https://saff-ml-fmcvgeb8btafd6gf.westeurope-01.azurewebsites.net/search-images
  //   const apiUrl = `https://saff-ml-fmcvgeb8btafd6gf.westeurope-01.azurewebsites.net/search-images?claim_id=${this.claimId}`; // Backend API URL

  //   const apiurl1=`http://localhost:80/claimDetails?claim_id=${this.claimId}`;

  //   this.http.get<{ key: string; url: string }[]>(apiUrl).subscribe(
  //     (response) => {
  //       this.images = response;
  //       this.isLoading = false;
  //     },
  //     (error) => {
  //       console.error('Error fetching images:', error);
  //       this.isLoading = false;
  //     }
  //   );
  // }

  

    // Open modal to display the image
    openImageModal(imageUrl: string): void {
      this.selectedImageUrl = imageUrl;
      this.dialog.open(this.dialogTemplate);
    }

    openHtmlModal(url: string) {
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

      const config = new MatDialogConfig();
      config.width = '100vw'; // Full width
      config.height = '60vh'; // Full height
      config.maxWidth = '100vw'; // Override max-width
      config.panelClass = 'full-width-dialog'; // Custom class for full-width dialog
  
      this.dialog.open(this.dialogTemplate, config);
    }

}
