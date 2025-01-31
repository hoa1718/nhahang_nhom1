import axios from 'axios';
import React, { useState,useEffect} from "react";
function FoodEdit({ open, close,props }) {
  const addCongThuc = () => {
    let NguyenLieu = document.querySelector("#NguyenLieu").cloneNode(true);
    document.getElementById("CongThuc").appendChild(NguyenLieu);
  };
  const [TenMon, setTenMon] = useState(props[0].TenMon)
  const [GiaBan, setGiaBan] = useState(props[0].GiaBan)
  const [GiaTien, setGiaTien] = useState(props[0].GiaTien)
  const [IDPhanLoai, setIDPhanLoai] = useState(props[0].IDPhanLoai)
  const [Image, setImage] = useState(props[0].Image)
  const [nguyenlieu,setNguyenLieu]= useState();
  const getNguyenLieu = () =>{
    axios.get('http://localhost:4000/ThucDon/NguyenLieu')
        .then(res => {
         setNguyenLieu(res.data.result)
         console.log(res.data.result);
        })
        .catch(err =>{
          console.log(err);
        })
  }
  const displayNL = (data) =>{
    return Object.keys(data).map((item, i) => {
      return(
          <option key={nguyenlieu[item].IDNguyenLieu} value={nguyenlieu[item].IDNguyenLieu}>{nguyenlieu[item].TenNguyenLieu} ({nguyenlieu[item].DonViTinh})</option>
      );
    })
  }
  const displayCongThuc = (data) => {
    return Object.keys(data).map((item, i) => {
      if( nguyenlieu !== undefined){

      }
      
    });
  };
  const displayPL =(data)=>{
    return Object.keys(data).map((item, i) => {
      return ( 
        <option value={props[2][item].IDPhanLoai}>{props[2][item].TenPhanLoai}</option>
      )
  })};
  const editFood = (event) =>{
    let CongThuc = []
    let NguyenLieu = document.querySelectorAll(".NguyenLieu")
    let SoLuong = document.querySelectorAll(".SoLuong")
    for( let i=0;i<NguyenLieu.length;i++){
      if(NguyenLieu[i].value !== '' && SoLuong[i].value !== ''){
        let temp={NguyenLieu:NguyenLieu[i].value,SoLuong:SoLuong[i].value}
        CongThuc.push(temp);
      }      
    }
    let formData = new FormData();
    formData.append("TenMon",TenMon)
            formData.append("GiaBan",GiaBan)
            formData.append("GiaTien",GiaTien)
            formData.append("IDPhanLoai",IDPhanLoai)
            if(Image !== props[0].Image){
              formData.append("Image",Image) 
            }else     
            formData.append("CongThuc",JSON.stringify(CongThuc))
            formData.append("ID",props[0].IDMon)
    const config={
      headers:{
        'content-type':'multipart/form-data'
      }
    }
    axios.post('http://localhost:4000/ThucDon/Update',formData,config)
    .then(res =>{
      window.location.reload();
      alert("Them thanh cong")
    }).catch(error => console.log(error.response.data))
  }
  useEffect(()=>{getNguyenLieu()},[])
  if (!open) return null;
  if (!props) return null
  return (
    <div>
      <div className="overlay">
        <div className="form-create">
          <h2
            style={{ color: "white", background: "#4e73df", fontWeight: "700" }}
          >
            Cập nhật
            <button onClick={close}>X</button>
          </h2>
          <form onSubmit={e=>editFood(e)}><div className="wrap-input">
            <p htmlFor="TenMon" className="create-label">
              Tên món *
            </p>
            <input
              type={"text"}
              name="TenMon"
              className="create-input"
              placeholder="Hãy nhập tên món..."
              defaultValue={props[0].TenMon}
              onChange={(e)=>{
              setTenMon(e.target.value)}
              }
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="PhanLoai" className="create-label">
              Phân loại *
            </p>
            <select name="PhanLoai" onChange={(e)=>setIDPhanLoai(e.target.value)}  className="create-input">
              {displayPL(props[2])}
            </select>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaTien" className="create-label">
              Giá tiền *
            </p>
            <input
              type={"text"}
              name="GiaTien"
              className="create-input"
              placeholder="Hãy nhập giá tiền..."
              defaultValue={props[0].GiaTien}
              onChange={(e)=>setGiaTien(e.target.value)}
            ></input>
          </div>
          <div className="wrap-input">
            <p htmlFor="GiaBan" className="create-label">
              Giá bán *
            </p>
            <input
              type={"text"}
              name="GiaBan"
              className="create-input"
              placeholder="Hãy nhập giá bán..."
              onChange={(e)=>setGiaBan(e.target.value)}
              defaultValue={props[0].GiaBan}
            ></input>
          </div>
          <div className="wrap-input" style={{ margin: "10px 0" }}>
            <span htmlFor="Image" className="create-label">
              Hình ảnh *
            </span>
            <input type={"file"} name="Image"  onChange={(e)=>setImage(e.target.value)} className="create-input"></input>
          </div>
          <div className="wrap-input" id="CongThuc">
            <p
              htmlFor="CongThuc"
              className="create-label"
              style={{ fontSize: "20px" }}
            >
              Công thức
              <input type={'button'}  onClick={addCongThuc} value={"+"} />
            </p>
            {displayCongThuc(props[1])}
          </div>
          <input type={'submit'} className="btn-confirm" value={"Xác nhận"} /></form>    
        </div>
      </div>
    </div>
  );
}

export default FoodEdit;
