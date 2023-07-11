import React from 'react'
import './Style.css'
//import {Data} from './Data'

const Display = ({sort,sorting,cat,filteringName}) => {

return (
    <>
           <div className='select_filter'>
        
             <select value={cat} onChange={filteringName}>
              <option value="all">All</option>
              <option value="Massala Theoryy">Massala Theoryy</option>
              <option value="Momoman">Momoman</option>
              <option value="Chai Wai">Chai Wai</option>
        </select>
    </div>

           <div className='select_filter'>
             <select value={sort} onChange={sorting}>
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="high">High</option>
        </select>
    </div>
   
    </>
  )
}

export default Display
