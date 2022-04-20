import { useState } from "react";

export const AddHouse = () => {

  const [formdata,setformdata]=useState({});
   
  const handleChange=(e)=>{
    const inputname=e.target.name;
    if(e.target.name==="checkbox"){
      setformdata({...formdata,[inputname]:e.target.checked?e.target.value:null})
    }else{
      setformdata({...formdata,[inputname]:e.target.value})
    }
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    let res=await fetch("http://localhost:8080/houses",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(formdata)
    });
  }
  
    
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit} >
        <label>name</label>
        <input type="text" className="name" name="name" required onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input name="ownerName" type="text" className="ownerName" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input name="address" type="text" className="address" required onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input name="areaCode" type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input name="rent" type="text" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input name="tenants" type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input name="tenants" type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input name="imgUrl" type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" onChange={handleSubmit} />
      </form>
    </div>
  );
}
export default AddHouse
