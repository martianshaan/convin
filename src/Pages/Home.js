import React,{useState,Fragment} from 'react'
import Box from '@mui/material/Box'
import Data from './Data'
import ReadOnlyCard from '../Components/ReadOnlyCard';
import EditCard from '../Components/EditCard'
import FilteredInfo from '../Components/FilteredInfo';
import Form from '../Components/Form';
import '../Pages/Home.css'





function Home({setHistory,history}) {
    const [info,setInfo]= useState(Data);

    const [editInfoId,setEditInfoId]= useState(null)
  
    const [addFormData,setAddFormData] = useState({
      Name:"",
      Link:"",
      Bucket:""
    })

    const [editFormData,setEditFormData]= useState({
      Name:"",
      Link:"",
      Bucket:""
    })
    
  const [filterTextValue,setFilterTextValue]= useState("all")


let filteredProductList = info.filter(item=>{
  if(filterTextValue==='entertainment'){
    return item.Bucket==='entertainment'
  }else if(filterTextValue==='educational'){
    return item.Bucket==='educational'
  }else if(filterTextValue==='other'){
    return item.Bucket==='other'
  }else {
    return item;
  }
})

    // const [bucket,setBucket]= useState('all');

    // const [filteredBucekts,SetFilteredBuckets]= useState([]);
 
    // useEffect(()=>{
    // filterHandler()
    // },[info,bucket])

    // const filterHandler=()=>{
    //   switch(bucket){
    //     case 'entertainment':
    //       SetFilteredBuckets(info.filter(card=>card.entertainment===true))
    //       break;
    //       case 'educational':
    //         SetFilteredBuckets(info.filter(card=>card.education===true))  
    //        break;
    //        default:
    //         SetFilteredBuckets(info);
    //         break; 
    //   }
    // }

   const handleChange=(e)=>{
    const{name,value}= e.target;
    setAddFormData(prevAddFormData=>
      ({...prevAddFormData,
      [name]: value
    }))
   }

   const handleSubmit=(e)=>{
      e.preventDefault();
    setInfo([...info,{...addFormData,id:Math.random()}])
    setAddFormData({
      Name:"",
      Link:"",
      Bucket:""
    })
    console.log(setInfo);
   }

   const handleEditClick=(e,person)=>{
    e.preventDefault();
    setEditInfoId(person.id);
    const formValues={
      Name: person.Name,
      Link:person.Link,
      Bucket: person.Bucket
    }
    setEditFormData(formValues)
   }

   const hanleDeleteClick=(del)=>{
    const delData = info.filter(carddata=>{
      return del !== carddata.id
    })
    setInfo(delData)
   }

   const handleEditFormChange=(e)=>{
      e.preventDefault();
      const {name,value}= e.target;
      setEditFormData(prevEditFormData=>({
        ...prevEditFormData,
        [name]: value
      }))
   }

   const handleEditFormSubmit=(e)=>{
    e.preventDefault();
    const editedInfo={
      id: editInfoId,
      Name: editFormData.Name,
      Link: editFormData.Link,
      Bucket:editFormData.Bucket
    }

    const newInfo=[...info];

    const index=  info.findIndex(personInfo=>personInfo.id===editInfoId)

    newInfo[index] = editedInfo;

    setInfo(newInfo)
    setEditInfoId(null)
   }

   const handleCancelClick=()=>{
    setEditInfoId(null)
  }



const filterValueSelected=(filterValue)=>{
setFilterTextValue(filterValue)
}
  return (
    <Box sx={{p:"20px", '& .MuiTextField-root': { m: 1, width: '25ch' ,alignItems:"center"}, }}>
         
         <Form handleSubmit={handleSubmit} handleChange={handleChange} addFormData={addFormData}/>
       <FilteredInfo info={info}  filterValueSelected={filterValueSelected} />

      <form onSubmit={handleEditFormSubmit}>
        <div className='mycards'>
        {filteredProductList.map(person=>(
        <Fragment>
          {editInfoId===person.id ?
           <EditCard editFormData={editFormData}   handleEditFormChange={handleEditFormChange}
           handleCancelClick={handleCancelClick}
           /> :  
            
           <ReadOnlyCard person={person} handleEditClick={handleEditClick} hanleDeleteClick={hanleDeleteClick}
           setHistory={setHistory} history={history}
           />

          }
        </Fragment>
        ))}
        </div>
      </form>
   
    </Box>
  )
}

export default Home


