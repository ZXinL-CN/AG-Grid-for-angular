import { Injectable } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { cellRendererComponent } from '../grid/cellRender.component';

@Injectable({
  providedIn: 'root',
})
export class AgGridTableColumns {
  constructor() { }

  public getDefaultColDef(): ColDef {
    return {
      minWidth: 100,
      editable: true,
      suppressMovable: true,
      suppressSizeToFit: false,
      resizable: true,
      // cellRenderer: (info: any) => {
      //   console.log(info);
      //   if (info.colDef.headerTooltip) {
      //     console.log(info.colDef.headerTooltip);
      //     return;
      //   }
      //   return (`<span title="${info.value}">${info.value}</span>`)
      // },
      cellRendererFramework: cellRendererComponent
    };
  }

  /**
   * description 正式出版类
   * @returns
   */
  public getFormalPublication(): ColDef[] {
    return [
      {
        headerName: '序号',
        field: 'serialNo',
        cellRenderer: (info: any) => (`<span title="🚀${info.value}">🚀${info.value}</span>`),
      },
      {
        headerName: '编研成果',
        field: 'researchResults',
        // cellRendererFramework: cellRendererComponent,
      },
      {
        headerName: '作者',
        field: 'author',
      },
      {
        headerName: '出版社',
        field: 'publisher',
      },
      {
        headerName: '数字（万）',
        headerTooltip: '数字（万）',
        field: 'amountMoney',
      },
      {
        headerName: '出版年度',
        field: 'publicationYear',
      },
      {
        headerName: '备注',
        field: 'remarks',
      },
    ];
  }

  /**
   * @description 新技术应用类
   * @returns
   */
  public getNewTechnologyApplication(): (ColDef | ColGroupDef)[] {
    return [
      {
        headerName: '年度',
        field: 'year',
      },
      {
        headerName: '文书档案',
        children: [
          {
            headerName: '永久、30年档案（件）',
            field: 'permanent',
          },
          {
            headerName: '扫描数量（件）',
            field: 'scansCount',
          },
          {
            headerName: '扫描页数',
            field: 'ScannedPage',
          },
          {
            headerName: '数据量（GB）',
            field: 'dataVolume',
          },
        ],
      },
      {
        headerName: '专业档案',
        children: [
          {
            headerName: '永久、30年档案（件）',
            field: 'permanent',
          },
        ],
      },
      {
        headerName: '电子档案',
        children: [
          {
            headerName: '永久、30年档案（件）',
            field: 'permanent',
          },
        ],
      },
    ];
  }
}
