import React, { useState } from 'react'
import Header from './Header'

const Addfaculties = () => {
    
var [name,setname]=useState("")
var [Education,seteducation]=useState("")
var [mobile,setmobile]=useState("")
var [address,setaddress]=useState("")
var [Pincode,setpincode]=useState("")
var [District,setdistrict]=useState("")

const Addfacult=()=>{
    const data={"name":name,"ducation":Education,"mobile":mobile,"äddress":address,"pincode":Pincode,"district":District}
    console.log(data)
}
   
    
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setname(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Education</label>
                    <input onChange={(e)=>{seteducation(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label>
                    <input onChange={(e)=>{setmobile(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Address</label>
                    <input onChange={(e)=>{setaddress(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Pincode</label>
                    <input onChange={(e)=>{setpincode(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">District</label>
                    <input onChange={(e)=>{setdistrict(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={Addfacult} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
  )
}

export default Addfaculties