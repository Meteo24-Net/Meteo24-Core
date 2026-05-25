import './style.css'
import { setupWeatherWidget } from './weather-widget.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="weather-container"></div>
`

setupWeatherWidget(document.querySelector<HTMLDivElement>('#weather-container')!)
