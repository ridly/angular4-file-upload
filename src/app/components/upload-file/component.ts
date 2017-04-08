import { Component } from '@angular/core';
import { BaseComponent } from '../base-component';


@Component({
  selector: 'upload-file',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class UploadFileComponent extends BaseComponent {
    private file             : any = null;
    private uploadFailed     : boolean = false;
    private uploadSuccessful : boolean = false;

    public uploadFile() {
        if (!this.file) {
            return;
        }
        this.loading = true;
        const params = { Key: this.file.name, Body: this.file };
        this.S3Bucket.upload(params, (err, data) => {
            this.loading = false;
            if(err) {
                this.uploadFailed = true;
                console.error(err);
            } else {
                this.uploadSuccessful = true;
            }
        });
    }

    public fileChangeEvent(event) {
        this.uploadFailed     = false;
        this.uploadSuccessful = false;
        this.file             = event.target.files[0];
    }
}
