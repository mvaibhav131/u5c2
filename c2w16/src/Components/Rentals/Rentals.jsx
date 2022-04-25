
import{useEffect,useState} from "react"
import "./Rentals.css";


export const Rentals = () => {
  const [data,setData]=useState([]);
  const [search,setSearch]=useState("");
  useEffect(()=>{
    getData()
  },[]);
  let getData=async()=>{
    let res =await fetch(`http://localhost:8080/houses`);
    let ndata=await res.json();
    setData(ndata);
  }
  let idsort=()=>{
    let newData=data.sort(function(a,b){
      return a.id-b.id;
    })
    setData([...newData]);
  }
  let lrentsort=()=>{
    let newData=data.sort(function(a,b){
      return a.rent-b.rent;
    })
    setData([...newData]);
  }
  let hrentsort=()=>{
    let newData=data.sort(function(a,b){
      return b.rent-a.rent;
    })
    setData([...newData]);
  }
  let hareasort=()=>{
    let newData=data.sort(function(a,b){
      return b.areaCode-a.areaCode;
    })
    setData([...newData]);
  }
  let lareasort=()=>{
    let newData=data.sort(function(a,b){
      return a.areaCode-b.areaCode;
    })
    setData([...newData]);
  }
  const showSearch=(e)=>{
    let s=e.target.value;
    setSearch(e.target.value);
    let newData=data.filter((el)=>{ 
      return el.address==s;
    })
    setData(newData);
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={idsort}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={lrentsort}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={hrentsort}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={lareasort}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={hareasort}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        value={search}
        onChange={showSearch}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house,index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  bachelor
                  {house.tenants}
                </td>
                <td className="houseImage">
                  <img src={house.imgUrl} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Rentals