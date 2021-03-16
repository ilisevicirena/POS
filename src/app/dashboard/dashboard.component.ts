import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chartist from 'chartist';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit{

  brojArtikala:number;
  brojRacuna:number;
  brojKorisnika:number;
  brojPartnera:number;
  podaci=[];
  
  constructor(private http: HttpClient) { }
 
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  getData(){
    
  }
  ngOnInit() {
     
    this.http.get('http://localhost:8181/ords/in2/api/grafovi').pipe(map(res=>res)).subscribe((res:any)=>{
      this.podaci=res.items;
      let nazivi=[];
      let brojke=[];
      for(let e of this.podaci){
        nazivi.push(e.naziv as string);
        brojke.push(e.broj as number);
      }
      this.crtaj(nazivi,brojke);

  }) 
  
   
    
  }

  crtaj(labels, series){
    var datawebsiteViewsChart = {
      series: [series],
      labels: labels  
      
    };
    var optionswebsiteViewsChart = {
        axisX: {
            showGrid: false
        },
        low: 0,
        high: 20,
        chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
    };
    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 2,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

    this.startAnimationForBarChart(websiteViewsChart);
  }
  ngAfterViewInit(){
    
  }

}
