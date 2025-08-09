import React, { useEffect, useRef } from 'react'

let tvScriptLoadingPromise

export default function TradingViewWidget({
  symbol = 'NASDAQ:AAPL',
  theme = 'light',
  interval = 'D',
  locale = 'en',
}) {
  const containerRef = useRef(null)
  const containerId = 'tradingview_widget_container_' + Math.random().toString(36).slice(2)

  useEffect(() => {
    if (!containerRef.current) return

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script')
        script.id = 'tradingview-widget-script'
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript'
        script.onload = resolve
        document.head.appendChild(script)
      })
    }

    tvScriptLoadingPromise.then(() => {
      if (!window.TradingView) return
      const container = document.getElementById(containerId)
      if (container) container.innerHTML = ''

      /* global TradingView */
      new window.TradingView.widget({
        autosize: true,
        symbol,
        interval,
        timezone: 'Etc/UTC',
        theme,
        style: '1',
        locale,
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: containerId,
      })
    })

    return () => {
      const container = document.getElementById(containerId)
      if (container) container.innerHTML = ''
    }
  }, [symbol, theme, interval, locale, containerId])

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{height: '100%', width: '100%'}}>
      <div id={containerId} style={{height: '100%', width: '100%'}} />
      <div className="tradingview-widget-copyright" style={{position: 'absolute', bottom: 8, left: 8, zIndex: 1}}>
        <a href={`https://www.tradingview.com/symbols/${encodeURIComponent(symbol.replace(':','-'))}/`} rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track {symbol} on TradingView</span>
        </a>
      </div>
    </div>
  )
}
