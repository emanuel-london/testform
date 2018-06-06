import { Injectable } from '@angular/core';

import { FormData, Artist } from './formData.model';
import {Http} from '@angular/http';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class FormDataService {
    data = 'assets/music.json';

    private formData: FormData = new FormData();


    constructor( protected localStorage: LocalStorage) {
    }

    getArtist(): Artist {
        // Return the Artist data
        const artist: Artist = {
            artistName: this.formData.artistName,
        };
        return artist;
    }

    setArtist(data: Artist) {
        // Update the Artist data only when the Artist Form
        this.formData.artistName = data.artistName;
        this.localStorage.setItem('artistName', data.artistName).subscribe(() => {});

    }
    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        this.formData.clear();
        return this.formData;
    }
}
