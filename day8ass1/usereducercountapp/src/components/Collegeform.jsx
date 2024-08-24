import { useReducer } from "react";


const initialstate={
        name:"",
    establishment_year:"",
    address: {
      building:"",
      street:"",
      city: {name:"",
         locality: {
              pinCode:"",
              landmark:"",
            }
      },
      state:"",
      coordinates: { latitude:"", longitude:"" },
    },
  courses_offered: []
}


const reducer=(formstate,{type,payload})=>{
    switch (type) {
      case "name":
        return { ...formstate, name: payload };

      case "establishment_year":
        return { ...formstate, establishment_year: payload };

      case "building":
        return { ...formstate, address: { ...formstate.address, building: payload } };

      case "street":
        return { ...formstate, address: {...formstate.address, street:payload} };

      case "cityname":
        return { ...formstate, address: {...formstate.address, city:{...formstate.address.city, name:payload}} };

      case "pincode":
        return {
          ...formstate,
          address: {
            ...formstate.address,
            city: { ...formstate.address.city, locality:{...formstate.address.city.locality, pincode:payload} },
          },
        };

      case "landmark":
        return {
          ...formstate,
          address: {
            ...formstate.address,
            city: {
              ...formstate.address.city,
              locality: {
                ...formstate.address.city.locality,
                landmark: payload,
              },
            },
          },
        };

      case "state":
        return {
          ...formstate,
          address: { ...formstate.address, state: payload },
        };

      case "latitude":
      return {
        ...formstate,
        address: {
          ...formstate.address,
          coordinates: { ...formstate.address.coordinates,latitude:payload },
        },
      };

      case "longitude":
       return {
         ...formstate,
         address: {
           ...formstate.address,
           coordinates: { ...formstate.address.coordinates,longitude:payload },
         },
       };


      case "courses_offered":
        return { ...formstate, courses_offered: payload };
    }
}




const Collegeform=()=>{
      
    const [formstate,dispatch]=useReducer(reducer,initialstate)   

    


    const handleChange=(e)=>{
        const {name,value}=e.target;
        dispatch({type:name,payload:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formstate)
    }

    const handlecourse=(e)=>{
        let value=e.target.value;
        let courses=value.split(",").map(el=>el.trim()).filter(el=>el.length>0)
        dispatch({ type: "courses_offered" ,payload:courses});
    }
   

    return (
      <div>
        <h1>college form </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>name: </label>
            <input
              type="text"
              placeholder="enter name"
              value={formstate.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>establishment_year: </label>
            <input
              type="number"
              placeholder="enter year"
              value={formstate.establishment_year}
              name="establishment_year"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>building:</label>
            <input
              type="text"
              placeholder="enter building"
              value={formstate.address.building}
              name="building"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>street: </label>
            <input
              type="text"
              placeholder="enter street"
              value={formstate.address.street}
              name="street"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>City Name: </label>
            <input
              type="text"
              placeholder="enter city name"
              value={formstate.address.city.name}
              name="cityname"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>locality pincode: </label>
            <input
              type="number"
              placeholder="enter pincode"
              value={formstate.address.city.locality.pincode}
              name="pincode"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>locality landmark: </label>
            <input
              type="text"
              placeholder="enter landmark"
              value={formstate.address.city.locality.landmark}
              name="landmark"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>State: </label>
            <input
              type="text"
              placeholder="enter state"
              value={formstate.address.state}
              name="state"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>latitude: </label>
            <input
              type="number"
              placeholder="enter latitude"
              value={formstate.address.coordinates.latitude}
              name="latitude"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>longitude:</label>
            <input
              type="number"
              placeholder="enter longitude"
              value={formstate.address.coordinates.longitude}
              name="longitude"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Courses:</label>
            <input
              type="text"
              placeholder="enter courses"
              value={formstate.courses_offered.join(",")}
              onChange={handlecourse}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );






}
export default Collegeform;