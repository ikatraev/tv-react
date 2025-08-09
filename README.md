# tv-react

React application showcasing the TradingView Advanced Chart widget as the main component.

## Getting started

Prerequisites:
- Node.js 18+ (or 20+ recommended)
- npm (comes with Node) or pnpm/yarn

### Install dependencies

```
npm install
# or
pnpm install
# or
yarn install
```

### Run in development

```
npm run dev
```

Vite will start the dev server (default http://localhost:5173) and open the browser automatically.

### Build for production

```
npm run build
```

### Preview production build locally

```
npm run preview
```

## TradingView widget

The main App renders a TradingView Advanced Chart widget (via `src/TradingViewWidget.jsx`). You can change the default symbol by editing `src/App.jsx`:

```jsx
<TradingViewWidget symbol="NASDAQ:TSLA" theme="dark" interval="60" />
```

The widget script is loaded once and reused across navigations/renders. The component resizes automatically to fill the viewport.
