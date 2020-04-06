import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionIconComponent } from './section-icon/section-icon.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [SectionIconComponent],
  exports: [
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    SectionIconComponent
  ]
})
export class SharedModule { }
