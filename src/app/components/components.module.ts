import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CustomHeaderComponent } from './custom-header/custom-header.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    CustomHeaderComponent
  ],
  exports: [
    CustomHeaderComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
