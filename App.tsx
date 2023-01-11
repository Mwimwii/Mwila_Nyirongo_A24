import * as React from 'react';
import './style.css';
import { LiveBrowserWidth } from './components'

const withLiveBrowserWidth = (divHeight) => (WrappedComponent) => (props) => {
  return <WrappedComponent {...props} divHeight={divHeight}/>
}
export default function App() {
  let divHeight: string;
  // @ts-ignore
  window.setDivHeight = height => divHeight = height
  // @ts-ignore
  window.setDivHeight(400)
  const WrappedComponent = withLiveBrowserWidth(divHeight)(LiveBrowserWidth)
  return (
    <div>
      <WrappedComponent divHeight={divHeight}/>
    </div>
  );
}
