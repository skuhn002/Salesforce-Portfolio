import { LightningElement } from 'lwc';

export default class Speech2Text extends LightningElement {
    recordingState = false;
    recordingStateWas = false;

    transcript = '';

    recognition = new webkitSpeechRecognition();
    
    connectedCallback() {
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.recognition.onresult = (event) => {
            console.log('Made it to onresult');
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    this.transcript += event.results[i][0].transcript;
                }
            }
        };
    }


    toggleRecording() {
        this.recordingStateWas = this.recordingState;
        this.recordingState = !this.recordingState;


        if (this.recordingStateWas === false && this.recordingState === true) {
            //Start Recording
            this.recognition.start();

            console.log('Recording Started');
        }
        if (this.recordingStateWas === true && this.recordingState === false) {
            //Stop Recording
            console.log('Recording Stopped');
            this.recognition.stop();
        }
    }

    clearTranscript() {
        this.transcript = '';
        console.log('Transcript cleared');
    }
}