import { AmazonSecrets } from '../../amazon-secrets';

declare var require: any
require('aws-sdk/dist/aws-sdk');

export class BaseComponent {
    protected AWSService =  window.AWS;
    protected S3Bucket   = null;
    protected loading : boolean = false;

    constructor () {
        this.AWSService.config.accessKeyId     = AmazonSecrets.accessKeyId;
        this.AWSService.config.secretAccessKey = AmazonSecrets.secretAccessKey;
        this.AWSService.config.region          = AmazonSecrets.region;
        this.S3Bucket = new this.AWSService.S3({params: { Bucket: AmazonSecrets.bucketName }});
        
    }
}
