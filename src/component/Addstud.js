import React, { useState } from 'react'
import Header from './Header'

const Addstud = () => {
    var [admno,setadmno]=useState("")
    var [rollno,setrollno]=useState("")
    var [name,setname]=useState("")
    var [Class,setclass]=useState("")
    var [parentname,setparentname]=useState("")
    var [mobile,setmobile]=useState("")
    var [address,setaddress]=useState("")

    const addstud=()=>{
        const data={"admno":admno,"rollno":rollno,"name":name,"class":Class,"parentname":parentname,"mobile":mobile,"address":address}
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
                    <label for="" className="form-label">Admn no</label>
                    <input onChange={(e)=>{setadmno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Roll no</label>
                    <input onChange={(e)=>{setrollno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setname(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Class</label>
                    <input onChange={(e)=>{setclass(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Parent Name</label>
                    <input onChange={(e)=>{setparentname(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label>
                    <input onChange={(e)=>{setmobile(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Address</label>
                    <input onChange={(e)=>{setaddress(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addstud} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addstud