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
  const [containerHeight, setContainerHeight] = React.useState<string>(null)
  const [nanError, setNanError] = React.useState(false)

  React.useEffect(() => {
    if (containerHeight) {
      setContainerHeight(containerRef.current.clientHeight)
    }
  }, [])

  React.useEffect(() => {
    if(isNan(Number(containerHeight))){
      setNanError(true)
    } else {
      setNanError(false)
      containerRef.current.style.height = containerHeight + 'px'
    }
  },[containerHeight])

  const handleInputChange = (e) => { 
    if(e.key === 'Backspace'){
      setContainerHeight(1)
    } else {
      setContainerHeight(containerHeight + e.key)
    }
  }


  return (
    <div ref={containerRef} className="container">

      <input type="number" min="0" onKeyDown={handleInputChange} defaultValue={containerHeight && cotainerHeight}/>
      <p>Incorrect container height value, please enter a proper value int (0...)</p> 
      <h1>InnerWidth: {innerWidth as number}</h1>
    </div>) 
}

export default LiveBrowserWidth