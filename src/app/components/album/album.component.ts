import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../details/Artist'
import { Album } from '../../details/Album'
import { ActivatedRoute } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    providers: [ SpotifyService ]
})

export class AlbumComponent implements OnInit{ 
    id: string;
    album: Album[];

    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe(id => {
                this.spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
            })
    }

 }