import { use, useEffect, useState } from "react"




function UseEffectHook() {
  let  [A , setA] = useState('second')
  
  
  
  // useEffect( ()=>{} , []  )
  useEffect( ()=>{
    // isme likha code tb chle ga jb page first time load hoga
    console.log('page is oppended ');
    
  } , []  )

  useEffect( ()=>{
    console.log('aghsfdghasdfasghd');
    
  }, [A]  )

  return (
    <div>
        <h1>Use Effect</h1>
        <button onClick={()=> setA('gg')}>Click to change</button>
    </div>
  )
}

export default UseEffectHook
