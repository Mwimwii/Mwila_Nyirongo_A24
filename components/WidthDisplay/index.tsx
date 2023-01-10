import React=require('react');

export const useInnerWidth = () => {

const [innerWidth, setInnerWidth] = React.useState(0)
  React.useEffect(() => {
    setInnerWidth(window.innerWidth)
  },[])

  return [innerWidth, setInnerWidth]
} 


const WidthDisplay = () => {
  const [innerWidth, setInnerWidth] = useInnerWidth() 

  return (
    <div className="container">
  
      <h1>{innerWidth as number}</h1>
  
    </div>) 
}

export default WidthDisplay