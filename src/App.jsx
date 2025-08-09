import React from 'react'
import TradingViewWidget from './TradingViewWidget.jsx'

export default function App() {
  return (
    <div style={{height: '100vh', width: '100vw', margin: 0, padding: 0}}>
      <TradingViewWidget symbol="NASDAQ:AAPL" theme="light" interval="D" />
    </div>
  )
}
