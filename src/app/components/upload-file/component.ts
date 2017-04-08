import { Component } from '@angular/core';
import { AmazonSecrets } from '../../../amazon-secrets';

declare var require: any
require('aws-sdk/dist/aws-sdk');

@Component({
  selector: 'upload-file',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class UploadFileComponent {
    private file;

    private uploadFile(component) {

        const AWSService = window.AWS;

        AWSService.config.accessKeyId = AmazonSecrets.accessKeyId;
        AWSService.config.secretAccessKey = AmazonSecrets.secretAccessKey;

        const bucket = new AWSService.S3({params: { Bucket: AmazonSecrets.bucketName }});
        const params = { Key: this.file.name, Body: this.file };

        bucket.upload(params, (err, data) => {
            console.log(err, data);
        });
    }

    private fileChangeEvent(event) {
        this.file = event.target.files[0];
    }
}
