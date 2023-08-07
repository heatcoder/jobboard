import Filter from "./components/Filter";
import Header from "./components/Header";
import JobList from "./components/JobList";
import data from  "../data.json/"
import { useEffect, useState } from "react";

function App() {
  
const [filteredTags, setFilteredTags] = useState([])

const [newData, setNewData] = useState(data)

const handlerFunction =(tag, operation)=>{
  if (operation === "add" &&  !filteredTags.includes(tag)) {
    setFilteredTags((previous)=>{
      return [...previous, tag]
    })
  } else if (operation === "remove") {
    setFilteredTags(prev=>prev.filter(item=>item!==tag))
  } else if(operation==="clear") {
    setFilteredTags([])
    
  } 
 }



 useEffect(  ()=> {

  let newData = data.filter((job)=> {
    return filteredTags.every((tag)=>{
      return (
        job.position===tag || job.role===tag || job.languages.includes(tag) || job.tools.includes(tag)
      )
    })
  })
  setNewData(newData)

 }, [filteredTags])


  return (
    <>
      <Header />
      <div className="container">
        <Filter  data = {newData}  filteredTags={filteredTags} handlerFunction = {handlerFunction} />
        <JobList handlerFunction = {handlerFunction} data = {newData} />
      </div>
    </>
  );
}

export default App;
