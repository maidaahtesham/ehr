"use client";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebaseConfig";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role } from "@/lib/data";


type Doctor = {
  id: number;
  doctorId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  speciality: string[];
  schedule: string[];
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Doctor ID", accessor: "doctorId", className: "hidden md:table-cell" },
  { header: "speciality", accessor: "speciality", className: "hidden md:table-cell" },
  { header: "Schedule", accessor: "Schedule", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

const DoctorListPage = () => {
  const [doctorsData, setDoctorsData] = useState<Doctor[]>([]);

  useEffect(() => {
    const doctorRef = ref(database, "doctors");

    const unsubscribe = onValue(doctorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const doctorsArray: Doctor[] = Object.values(data);
        setDoctorsData(doctorsArray);
      } else {
        setDoctorsData([]);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const renderRow = (item: Doctor) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.doctorId}</td>
      <td className="hidden md:table-cell">{item.speciality.join(", ")}</td>
      <td className="hidden md:table-cell">{item.schedule.join(", ")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/doctors/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="doctor" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Doctors</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="doctor" type="create" />
            )}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={doctorsData} />
      <Pagination />
    </div>
  );
};

export default DoctorListPage;
