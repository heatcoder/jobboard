const Filter = ({filteredTags, handlerFunction}) => {

  return (
    
    <div className="filter">
      <div className="filterTags"  >
     
           
              { filteredTags.map((tag, i)=>{
                return (
                <div onClick={()=>handlerFunction(tag, "remove")} key={i} className="filterTag">
                
                <span  className="tag"> {tag} </span>  

                <span className="remove"  >
                <img  src="/images/icon-remove.svg" alt="" />
              </span>
            </div>)
              })}
     </div>
      <div onClick={()=>handlerFunction(null, "clear")} className="clearButton" >
        Clear
      </div>
    </div>
  );
};

export default Filter;
