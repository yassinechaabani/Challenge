import './Summary.css';

function Summary({ bgColor, txtColor, icons, valeur, bgBorder, number }) {
  const styleObject = {
    color: txtColor,
    background: bgBorder,
    backgroundColor: bgColor
  };

  return (
<div className='summary-cnt' style={styleObject}>
      
    
    <div className='container'>
        <span className='icons'>{icons}</span>
        <span className='value'>{number}</span>
    </div>
    <div className='number-cntn'>
        <span className='number-content'>{number}</span>
        <span className='number-100'>100</span>
    </div>
</div>
  );
}

export default Summary;
