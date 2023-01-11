import * as React from 'react';
import './style.css';
import { LiveBrowserWidth } from './components'

export default function App() {
  let divHeight: number;
  // @ts-ignore
  window.setDivHeight = height => divHeight = height
  return (
    <div>
      <LiveBrowserWidth />
    </div>
  );
}
