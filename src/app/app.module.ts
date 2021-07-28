/*
ANTERA: LEADS - REPLICA
Author: 'eberry@anterasoftware.com'
This code is brought to you by Elwood Berry @ anterasoftware.com 
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

// LEADS
import { LeadsComponent } from './components/leads/leads.component';
import { LeadsListComponent } from './components/leads/_elements/leads-list/leads-list.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialLibraryModule,
    FlexLayoutModule
  ],
  declarations: [AppComponent, LeadsComponent, LeadsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
-------------------------------------------------
Copyright 2021 anterasoftware.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.anterasoftware.com 

*/
