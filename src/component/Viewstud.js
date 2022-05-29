import React from 'react'
import Header from './Header'

const Viewstud = () => {

    var Viewstud=[{
        "admno":"123",
        "rollno":"1",
        "name":"vaisakh",
        "class":"mca",
        "parentname":"sindhu",
        "mobile":"9876543211",
        "address":"kumbazha"
    }]
  return (
    <div>
        <Header/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Admno</th>
      <th scope="col">Roll no</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Parent Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {Viewstud.map((value,key)=>{
        return <tr>
            <td>{value.admno}</td>
            <td>{value.rollno}</td>
            <td>{value.name}</td>
            <td>{value.class}</td>
            <td>{value.parentname}</td>
            <td>{value.mobile}</td>
            <td>{value.address}</td>
            




        </tr> 

    }


    )}
  </tbody>
</table>
    </div></div></div></div></div></div>
  )
}

export default Viewstud