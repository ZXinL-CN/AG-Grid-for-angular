import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { AgGridTableColumns } from './common/columns.common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public defaultColDef: ColDef = {};
  public options: {
    columnDefs: ColDef[];
    rowData: Array<any>;
  } = {
    columnDefs: [],
    rowData: [],
  };
  public options2: {
    columnDefs: ColDef[];
    rowData: Array<any>;
  } = {
    columnDefs: [],
    rowData: [],
  };
  constructor(private _AgGridTableColumns: AgGridTableColumns) {}

  ngOnInit() {
    this.defaultColDef = this._AgGridTableColumns.getDefaultColDef();
  }

  async ngAfterViewInit() {
    this.options = await this.drawFormalPublicationTable();
    this.options2 = await this.drawNewTechnologyApplicationTable();
  }

  /**
   * @description 绘制正式出版类表格
   */
  public async drawFormalPublicationTable() {
    const columnDefs = this._AgGridTableColumns.getFormalPublication();
    const rowData = this.initTableData(this.initSchema, columnDefs);
    return {
      columnDefs,
      rowData,
    };
  }
  /**
   * @description 绘制新技术应用类表格
   */
  public async drawNewTechnologyApplicationTable() {
    const columnDefs = this._AgGridTableColumns.getNewTechnologyApplication();
    const rowData = this.initTableData(this.initSchema, columnDefs, 3);
    return {
      columnDefs,
      rowData,
    };
  }

  /**
   * @description 初始化表格数据数据
   * @param {Function} initSchemaFn 数据模式生成函数
   * @param {ColDef[]} columnDefs 表格列配置
   * @returns
   */
  public initTableData(
    initSchemaFn: Function,
    columnDefs: ColDef[],
    rowCount: number = 2
  ) {
    const schema = initSchemaFn(columnDefs);
    const rowData = Array(rowCount)
      .fill(0)
      .map((_) => Object.assign({}, schema));
    return rowData;
  }

  /**
   * @description 初始化表格数据模式
   * @param columnDefs
   * @returns
   */
  private initSchema(columnDefs: ColDef[]) {
    const schema = {};
    columnDefs.map((columnDef) => {
      schema[columnDef['field']] = '';
    });
    return schema;
  }

  onShowData() {
    console.log(this.options.rowData);
  }
}
