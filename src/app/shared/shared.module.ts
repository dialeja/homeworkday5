import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourcesService } from './resources.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CardComponent, HttpClientModule],
  providers: [ResourcesService],
  declarations: [CardComponent]
})
export class SharedModule { }
