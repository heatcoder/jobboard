import JobItem from "./JobItem";
const JobList = ({data, handlerFunction}) => {
  return (
    <div className="jobList">
{

data.map((item) => (

  <JobItem key ={item.id} item= {item} handlerFunction={handlerFunction} />
))

}
     


    
    
        
    </div>
  );
};

export default JobList;
