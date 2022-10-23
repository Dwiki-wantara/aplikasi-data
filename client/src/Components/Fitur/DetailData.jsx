import { useMutation, useQuery } from "react-query";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { API } from "../../config/API";

export default function Detail({ id, age, tglLahir, setAddData }) {
  let { data: user } = useQuery("user1", async () => {
    const response = await API.get("/users/" + id);
    return response.data;
  });
  return (
    <>
      <div className="bg-slate-200  centered w-[90%] md:w-[35rem] z-50 rounded-lg pb-3">
        <div className="bg-white rounded-t-lg mb-3 pl-4 pt-2 flex items-center">
          <div className="text-2xl font-bold mb-3 text-dark flex gap-2 items-center">
            <FaUserPlus size={30} /> Data
          </div>
        </div>

        <div className="w-[90%] bg-white py-2 px-4 m-auto rounded-lg">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-4">
              <span>NIK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {user?.nik}</span>
            </div>
            <div className="flex flex-row gap-4">
              <span>Nama&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {user?.name}</span>
            </div>
            <div className="flex flex-row gap-4">
              <span>Umur&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {age(user?.date)} Tahun</span>
            </div>
            <div className="flex flex-row gap-4">
              <span>Jenis Kelamin : {user?.gender}</span>
            </div>
            <div className="flex flex-row gap-4">
              <span>Tanggal Lahir : {tglLahir(user?.date)}</span>
            </div>
            <div className="flex flex-row gap-4">
              <span>Alamat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {user?.address}</span>
            </div>
            <div className="flex flex-row gap-4">
              <span>Negara &ensp; &ensp; &ensp;&nbsp;&nbsp;: {user?.country}</span>
            </div>
            <button className="bg-blue-500 py-2 text-white font-bold rounded-lg" onClick={() => setAddData(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
