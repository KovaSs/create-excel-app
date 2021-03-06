import { ExcelComponent } from '@core'
import createTable from './table.template'

export default class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return createTable(20)
  }
}
