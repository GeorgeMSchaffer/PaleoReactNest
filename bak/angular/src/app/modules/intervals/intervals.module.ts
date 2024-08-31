import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IntervalsComponent } from './intervals.component';
import { HttpClient } from '@angular/common/http';
@NgModule({
    declarations: [IntervalsComponent],
    imports: [
        HttpClient,
        CommonModule,
        HttpClientModule
    ],
    exports: [IntervalsComponent]
})
export class IntervalsModule { }
