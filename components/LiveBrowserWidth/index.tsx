import React=require('react');
import './style.css'

export const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [innerWidth]);

  return [innerWidth, setInnerWidth];
};



const LiveBrowserWidth = () => {
  const [innerWidth, setInnerWidth] = useInnerWidth()
  const containerRef = React.useRef(null)
  const [containerHeight, setContainerHeight] = React.useState(0)

  const handleInputChange = () => { 
    console.log(containerRef)
  }

  return (
    <div ref={containerRef} className="container" value={ containerHeight ? containerHeight : 200 }>
      <input type="number" min="0" onBlur={handleInputChange}/>
      <h1>InnerWidth: {innerWidth as number}</h1>
    </div>) 
}

export default LiveBrowserWidth