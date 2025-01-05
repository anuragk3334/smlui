import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  claimId:string='';
  isLoading:boolean=false;

  images:{key:string;url:string}[]=[];
  selectedImageUrl: string | null = null;
  sanitizedUrl: SafeResourceUrl | null = null;

  @ViewChild('dialogTemplate') dialogTemplate!:TemplateRef<any>;

  constructor(private http:HttpClient ,private dialog:MatDialog ,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  searchImages(){
    console.log(this.claimId);
    if (!this.claimId) {
      alert('Please enter a claim ID');
      return;
    }

    this.isLoading=true;
    this.images=[];
    const apiUrl = `http://localhost:5003/search-images?claim_id=${this.claimId}`; // Backend API URL

    this.http.get<{ key: string; url: string }[]>(apiUrl).subscribe(
      (response) => {
        this.images = response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching images:', error);
        this.isLoading = false;
      }
    );
  }

  

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
