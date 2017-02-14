import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../details/Artist';

@Component ({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [ SpotifyService ]
})

export class SearchComponent {

    searchStr: string;
    searchRes: Artist[];

    constructor(private spotifyService: SpotifyService) {
        
    }

    searchMusic() {
        if(this.searchStr == undefined) {
            console.log("hello undefined");
        } else if(this.searchStr != "") {
            this.spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            })
        }
    }
 }