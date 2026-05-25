export function setupWeatherWidget(element: HTMLDivElement) {
  // Placeholder implementation for fetching and displaying weather
  element.innerHTML = `
    <div class="weather-widget" style="padding: 20px; font-family: sans-serif; background: rgba(0,0,0,0.8); color: white; border-radius: 8px;">
      <h2>Tbilisi</h2>
      <p>Sunny, 22°C</p>
      <div id="qr-code-placeholder" style="width: 100px; height: 100px; background: white; margin-top: 10px;"></div>
    </div>
  `;
}
