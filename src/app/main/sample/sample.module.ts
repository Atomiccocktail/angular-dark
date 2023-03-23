import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { CoreCommonModule } from '@core/common.module'

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module'

import { SampleComponent } from './sample.component'
import { HomeComponent } from './home.component'

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes = [
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [
    RouterModule.forChild(routes), 
    ContentHeaderModule, 
    TranslateModule, 
    CoreCommonModule,
    NgxSliderModule,
    MatSlideToggleModule
  ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
