import { Component, OnInit } from '@angular/core';
import topBarJsonData from '../../../assets/data/topBarItems.json'
import { TopBarItem } from './top-bar.interfaces';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public readonly topbarItems: TopBarItem[] = topBarJsonData;
  constructor() { }

  ngOnInit(): void {
  }

  public openLink(item): void {
    window.open(item.link)
  }

}
