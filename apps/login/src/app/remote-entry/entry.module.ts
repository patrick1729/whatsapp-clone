import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RemoteEntryComponent } from './entry.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [RemoteEntryComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: RemoteEntryComponent,
            },
        ]),
    ],
    providers: [],
})
export class RemoteEntryModule {}
