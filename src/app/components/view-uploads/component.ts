import { Component } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'view-uploads',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ViewUploadsComponent extends BaseComponent {
    private fileList = [];
    constructor () {
        super();
        this.refresh();
    }

    private refresh() {
        this.loading = true;
        this.fileList = [];
        this.S3Bucket.listObjects( (error,res) => {
            this.loading = false;
            if(error){
                console.error('error:',error);
            } else {
                for( const file of res.Contents ) {
                    this.fileList.push(file);
                }
            }
        });
    }
}
