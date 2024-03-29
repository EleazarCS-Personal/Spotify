import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
//import * as dataRaw from '../../../../data/tracks.json'

import { TrackService } from '@modules/tracks/services/track.service';
import { TracksModule } from '@modules/tracks/tracks.module';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTracksList: Array<TrackModel> = []

  constructor(private TracksService: TrackService) { }

  ngOnInit(): void {
    //const { data }: any = (dataRaw as any).default
    //this.mockTracksList = data;
    //console.log(data)

    this.TracksService.getAllTracks$().subscribe((Response: TrackModel[]) =>{
      this.mockTracksList = Response
    })
  }

  ngOnDrestroy(): void{

  }

}
