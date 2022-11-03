import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'cell-renderer',
    template: `
    <span title="{{params.value}}">       
        {{params.value}}
    </span>
    `
})
export class cellRendererComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }

}
