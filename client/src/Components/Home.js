import { FaFolder } from "react-icons/fa";
import { useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/API";
import AddData from "./Fitur/AddData";
import UpdateData from "./Fitur/UpdateData";
import ConfirmData from "./Fitur/ComfirmData";
import DetailData from "./Fitur/DetailData";
import "./Home.css";


function Home() {
  
let month = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
]

function Age(time) {
  let today = new Date();
  let all = new Date(time);
  let age = today.getFullYear() - all.getFullYear();
  return age;
}

function getFullTime(time) {
  let all = new Date(time);
  let date = all.getDate()
  let monthIndex = all.getMonth()
  let year = all.getFullYear()
  let tglLahir = `${date} ${month[monthIndex]} ${year}`
  return tglLahir
}

  const [dataMap, setDataMap] = useState("");
  const [dataSearch, setDataSearch] = useState("");
  const [formUpdate, setFormUpdate] = useState(false);
  const [addData, setAddData] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [DeleteData] = useState(false);
  const [detailData, setDetail] = useState(false);
  const [id, setId] = useState();

  const [form, setForm] = useState({ 
    nik: "",
    name: "",
    gender: "",
    date: "",
    address: "",
    country: "",
  });

  const handleChangeName = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };
  
  const handleSubmitName = (e) => {
      e.preventDefault();
      setDataMap(form.name);
  };
  
  const handleChangeNik = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmitNik = (e) => {
      e.preventDefault();
      setDataSearch(form.nik);
  };



  let { data: users, refetch } = useQuery("users", async () => {
    const response = await API.get("/users");
    return response.data;
  });

  let handleDelete = (id) => {
    setModalDelete(true);
    setId(id);
  };

  let handleDetail = (id) => {
    setDetail(true);
    setId(id);
  };

  let handleUpdate = async (id) => {
    setFormUpdate(true);
    setId(id);
  };

  const [searchParam] = useState(["nik", "name"]);

  function search(e) {
    return e.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(dataSearch.toLowerCase()) > -1
        );
      });
    });
  }

  // console.log(q);
  let daata;
  let usernik;
  if (users?.length > 0) {
    daata = Object.values(users);
    usernik = search(daata);
  
  }
  console.log(usernik);


  return (
    <>
      {detailData && <DetailData id={id} age={Age} tglLahir={getFullTime} setAddData={setDetail} />}
      {modalDelete && <ConfirmData modalDelete={modalDelete} setModalDelete={setModalDelete} DeleteData={DeleteData} id={id} refetch={refetch}/>}
      {addData && <AddData addData={addData} setAddData={setAddData} />}
      {formUpdate && <UpdateData id={id} formUpdate={formUpdate} setFormUpdate={setFormUpdate} />}

      <div style={{padding:"40px"}}>
        <h1 style={{alignItems:"center",display:"flex",fontSize:"20px", fontWeight:"bold"}}>
          <FaFolder size={50} /> &nbsp;&nbsp;Aplikasi Data Pribadi
        </h1>
        <div className="flex flex-col px-6 py-10 mt-7 rounded-xl" style={{backgroundColor:"#FFE1E1"}}>
          <div className="flex flex-col ">
            <label htmlFor="nik">NIK</label>
            <div>
              <input id="nik" name="nik" type="number" placeholder="search..." style={{width:"30%",padding:"10px"}} onChange={handleChangeNik}/>
              <button className="hover:bg-orange-800 bg-blue-700" style={{marginLeft:"10px", padding:"10px 50px", color:"white", borderRadius:"5px"}} onClick={handleSubmitNik}>Cari</button>
            </div>
            
          </div>

          <div className="flex flex-col" style={{marginTop:"10px"}}>
            <label htmlFor="name">Name</label>
            <div>
              <input id="name" name="name" type="text" placeholder="search..." style={{width:"30%",padding:"10px"}} onChange={handleChangeName} />
              <button  className="hover:bg-orange-800 bg-blue-700" style={{marginLeft:"10px", padding:"10px 50px", color:"white", borderRadius:"5px"}} onClick={handleSubmitName}>Cari</button>
            </div>
            
          </div>

        </div>
        <div className="flex justify-end m-4">
          <button
            className="flex items-center gap-2 bg-blue-700 text-white px-8 py-2 rounded-lg  hover:bg-orange-800"
            onClick={() => setAddData(!addData)}
          >
           Add
          </button>
        </div>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="uppercase dark:bg-blue-700 text-white" style={{textAlign:"center"}}>
              <tr>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  nik
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  nama lengkap
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  umur
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  tanggal lahir
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  jenis kelamin
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  alamat
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  negara
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}> 
                  action
                </th>
              </tr>
            </thead>
            <tbody style={{textAlign:"center"}}>
              {dataMap ? (
                users
                  ?.filter((e) => e.name.toLowerCase().includes(dataMap))
                  .map((item, key) => (
                    <tr key={key} >
                      <td className="py-4 px-6" style={{border:"1px solid black"}}>{item.nik}</td>
                      <td className="py-4 px-6" style={{border:"1px solid black"}}>{item.name}</td>
                      <td className="py-4 px-6" style={{border:"1px solid black"}}>{Age(item.date)}</td>
                      <td className="py-4 px-6" style={{border:"1px solid black"}}>{getFullTime(item.date)}</td>
                      <td className="py-4 px-6" style={{border:"1px solid black"}}>{item.gender}</td>
                      <td className="py-4 px-6" style={{border:"1px solid black"}}>{item.address}</td>
                      <td className="py-4 px-6" style={{border:"1px solid black"}}>{item.country}</td>
                      <td className="py-4 px-6"  style={{display:"flex", border:"1px solid black"}}>
                      <div style={{cursor:"pointer",color:"#FF9100", marginLeft:"100px"}} className="hover:underline" onClick={() => handleDetail(item.nik)}>
                        <span>Detail&nbsp;|&nbsp;</span>
                      </div>
                      <div style={{cursor:"pointer",color:"#00389A"}} className="hover:underline" onClick={() => handleUpdate(item.nik)}>
                        <span>&nbsp;Edit&nbsp;|&nbsp;</span> 
                      </div>
                      <div style={{cursor:"pointer",color:"#D20000"}} className="hover:underline" onClick={() => handleDelete(item.nik)}>
                        <span>Delete</span>
                      </div>
                      </td>
                    </tr>
                  ))
              ) : usernik?.length > 0 ? (
                usernik?.map((item, k) => (
                  <tr key={k}>
                    <td className="py-4 px-6"  style={{border:"1px solid black"}}>{item.nik}</td>
                    <td className="py-4 px-6"  style={{border:"1px solid black"}}>{item.name}</td>
                    <td className="py-4 px-6"  style={{border:"1px solid black"}}>{Age(item.date)}</td>
                    <td className="py-4 px-6"  style={{border:"1px solid black"}}>{getFullTime(item.date)}</td>
                    <td className="py-4 px-6"  style={{border:"1px solid black"}}>{item.gender}</td>
                    <td className="py-4 px-6"  style={{border:"1px solid black"}}>{item.address}</td>
                    <td className="py-4 px-6"  style={{border:"1px solid black"}}>{item.country}</td>
                    <td className="py-4 px-6"  style={{display:"flex", border:"2px solid black"}}>
                      <div style={{cursor:"pointer",color:"#FF9100", marginLeft:"100px"}} className="hover:underline" onClick={() => handleDetail(item.nik)}>
                        <span>Detail&nbsp;|&nbsp;</span>
                      </div>
                      <div style={{cursor:"pointer",color:"#00389A"}} className="hover:underline" onClick={() => handleUpdate(item.nik)}>
                        <span>&nbsp;Edit&nbsp;|&nbsp;</span> 
                      </div>
                      <div style={{cursor:"pointer",color:"#D20000"}} className="hover:underline" onClick={() => handleDelete(item.nik)}>
                        <span>Delete</span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <>
                  <div>DATA YANG ANDA CARI KOSONG</div>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    
    </>
  );
}

export default Home;
