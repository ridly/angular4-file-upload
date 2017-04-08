import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'upload-file',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class UploadFileComponent {
    private fileInput;

    private uploadFile(component) {
        console.log('Upload file', this.fileInput);
    }

    private fileChangeEvent(event) {
        console.log('Event', event.srcElement.files);
    }
}
