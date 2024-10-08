import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Fieldset, FieldsetModule } from 'primeng/fieldset';
import { PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar'
import {TableModule} from 'primeng/table'

@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    ToolbarModule,
    TableModule
  ],


})
export class PrimeNgModule { }
