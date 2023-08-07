const JobItem = ({item, handlerFunction}) => {

  const tags = [item.role, item.level, ...item.languages, ...item.tools]
 
  return (
    <div className="jobCard">
      <div className="companyLogo">
        <img src= {item.logo} alt="" />
      </div>
      <div className="listingInfo">
        <div className="listingTitle">
          <h3>{item.company}</h3>
          {item.new && <span className="new" > NEW </span> }
          {item.featured &&  <span className="featured" > FEATURED </span> }
         
        
        </div>
        <h2>{item.position}</h2>
        <div className="listingMeta">
          <span>{item.postedAt}</span>
          <span>{item.contract}</span>
          <span>{item.location}</span>
        </div>
      </div>
      <div className="listingTags">

        {tags.map((tag, i)=>(
    <span onClick={ ()=>handlerFunction(tag, "add")} key={i}>
    {tag}
   </span>

        ))}
       
        
          
     
      </div>
    </div>
  );
};

export default JobItem;
