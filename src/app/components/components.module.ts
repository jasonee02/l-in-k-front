
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MainCardComponent } from './main-card/main-card.component'
import { SearchModalComponent } from './search-modal/search-modal.component'
import { CommunityCardComponent } from './community-card/community-card.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [MainCardComponent, SearchModalComponent, CommunityCardComponent],
  exports: [MainCardComponent, SearchModalComponent, CommunityCardComponent]
})
export class ComponentsModules{}
