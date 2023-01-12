import React from 'react'

function FilteredInfo({info,filterValueSelected}) {
    const filterChangeHandler=(e)=>{
        filterValueSelected(e.target.value);
    }
  return (
    <div>
         <label id="Bucketfilter" >Filter Video Type of Your Choice :</label>
     <select  value= {info.Bucket}
      aria-labelledby="Bucketfilter" 
      onChange={filterChangeHandler}>
          <option value='all'>All</option>
          <option value='educational'>Educational Videos</option>
          <option value='entertainment'>entertainment Videos</option>
          <option value='other'>Other Videos</option>
    </select>
    </div>
  )
}

export default FilteredInfo