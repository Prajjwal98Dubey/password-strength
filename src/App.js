
import{useEffect, useState} from 'react'
function App() {
    const [toggle,setToggle]=useState(false)
    const[text,setText]=useState("")
   const handleToggle=()=>{
     setToggle(!toggle)
     if(!toggle){
      document.getElementById('input-field').type="password"
     }
     else{
       document.getElementById('input-field').type='text'
       
     } 
   }
   const handleClear=()=>{
     document.getElementById('input-field').value=""
   }
   const handleUpper=(text)=>{
     for(let i=0;i<text.length;i++){
       if(text.includes(text[i].toUpperCase()))
       {
         return true
       }
     }
     return false
   }
   const handleLower=(text)=>{
    for(let i=0;i<text.length;i++){
      if(text.includes(text[i].toLowerCase()))
      {
        return true
      }
    }
    return false
  }
  const handleNumbers=(text)=>{
    for(let i=0;i<=9;i++){
      if(text.includes(i))
      {
        return true
      }
    }
    return false
  }
  const handleSpecial=(text)=>{
      if(text.includes('$') || text.includes('@')|| text.includes('!')){
        return true
      }
      else{
        return false
      }
  }
  const handleStrenght=(text)=>{
    if(handleUpper(text) && handleLower(text) && handleSpecial(text) && handleNumbers(text) && text.length>=8){
      document.getElementById('strength').style.color="green"
      return "Strong"
    }
    else if((handleUpper(text) && handleLower(text) && handleSpecial(text) && handleNumbers(text) && text.length<8 )&& (handleUpper(text) && handleLower(text) && handleSpecial(text) && handleNumbers(text) && text.length>4) ){
      document.getElementById('strength').style.color="orange"
      return "good"
    } 
    else if((handleUpper(text) && handleLower(text) && handleSpecial(text) && handleNumbers(text)) && text.length<=4){
      document.getElementById('strength').style.color="red" 
      return "weak"
    }
    else{
      return "reconsider your password"
    }
    
  }
   
  
  return (

    <>
     
    <div>
      <input id="input-field" className="input-field" type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      </div>
      <div>
      <button onClick={()=>handleToggle()}>Show/Hide</button>
      <button onClick={()=>handleClear()}>Clear</button>
      </div>
      <div>
        {handleStrenght(text)==="reconsider your password" ? <div id="message">
          <ul>
            <li>Password must contain Upper Letters</li>
            <li>Password must contain Lower Letters</li>
            <li>Password must contain Numbers</li>
            <li>Password must contain Special Character</li>
            <li>Password must have more than 8 character of length</li>
          </ul>
        </div>:null}
      </div>
      <div>
        { text==="" ? null :<div id="strength">{handleStrenght(text)}</div>
      }</div>
      
    </>
  );
}

export default App;