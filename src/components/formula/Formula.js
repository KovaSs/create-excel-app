import { ExcelComponent } from '@core'

export default class Formula extends ExcelComponent {
  static className = 'excel__formula'

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}
