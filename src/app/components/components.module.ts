
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MainCardComponent } from './main-card/main-card.component'
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [MainCardComponent],
  exports: [MainCardComponent]
})
export class ComponentsModules{}
