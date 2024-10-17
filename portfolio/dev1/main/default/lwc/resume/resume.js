import { LightningElement } from 'lwc';
import resumeImgResource from '@salesforce/resourceUrl/SF_Resume_10_15_2024_img';

export default class Resume extends LightningElement {
    resumeImgUrl = resumeImgResource;
}