

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
 
const useContainerHeight = (divHeight: string) => {
 const containerRef = React.useRef(null)
 const [containerHeight, setContainerHeight] = React.useState<string>(divHeight || null)
 const [nanError, setNanError] = React.useState(false)
 
 React.useEffect(() => {
   if (containerRef) {
     setContainerHeight(containerRef.current.clientHeight)
   }
 }, [])
 
 React.useEffect(() => {
   if(isNaN(Number(containerHeight))){
     setNanError(true)
   } else {
     setNanError(false)
     containerRef.current.style.height = containerHeight + 'px'
   }
 },[containerHeight])
 
 const handleInputChange = (e) => {
   let currentHeight = containerHeight.toString()
   currentHeight = currentHeight.slice(0,currentHeight.length-1)
   console.log()
   if(e.key === 'Backspace'){
   setContainerHeight(currentHeight)
   } else {
     setContainerHeight(containerHeight + e.key)
   }
 }
 
return {
containerRef,
containerHeight,
nanError,
handleInputChange,
}
 
}
 
const LiveBrowserWidth = ({divHeight}) => {
 const [innerWidth] = useInnerWidth()
 const {containerRef, containerHeight, nanError, handleInputChange} = useContainerHeight(divHeight)
  return (
   <div ref={containerRef} className="container">
 
     <input type="number" min="0" onKeyDown={handleInputChange} defaultValue={containerHeight && containerHeight}/>
     {nanError && <p>Incorrect container height value, please enter a proper value int (0...)</p>}
     <h1>InnerWidth: {innerWidth as number}</h1>
   </div>)
}
 
export default LiveBrowserWidth
