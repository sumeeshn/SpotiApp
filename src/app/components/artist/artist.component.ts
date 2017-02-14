import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../details/Artist'
import { Album } from '../../details/Album'
import { ActivatedRoute } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    providers: [ SpotifyService ]
})

export class ArtistComponent implements OnInit{
    id: string;
    artist: Artist[];
    albums: Album[];
    
    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })
                this.spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })            
            })
    }

 }