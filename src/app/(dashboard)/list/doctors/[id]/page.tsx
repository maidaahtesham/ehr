import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleDoctorPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* DOCTOR INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Dr. Raza Rizvi</h1>
                {role === "admin" && (
                  <FormModal
                    table="doctor"
                    type="update"
                    data={{
                      id: 1,
                      name: "Dr. Raza Rizvi",
                      email: "raza.rizvi@clinic.com",
                      phone: "1234567890",
                      address: "abc Pakistan",
                      photo:
                        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                      speciality: ["Cardiology", "General Medicine"],
                      schedule: ["1A", "2B"],
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500">
                Experienced cardiologist providing compassionate and comprehensive care.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>raza.rizvi@clinic.com</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>123-456-7890</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="" alt="" width={14} height={14} />
                  <span>abc, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Schedule */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">1A, 2B</h1>
                <span className="text-sm text-gray-400">Schedule</span>
              </div>
            </div>
            {/* Speciality */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">Cardiology, General Medicine</h1>
                <span className="text-sm text-gray-400">Speciality</span>
              </div>
            </div>
          </div>
        </div>

        {/* CALENDAR */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-lg font-semibold mb-2">Doctor&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* Shortcuts */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Doctor&apos;s Appointments
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Medical Records
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
              Patient List
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Prescription History
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Billing Details
            </Link>
          </div>
        </div>

        {/* Performance & Announcements */}
        {/* <Performance /> */}
        <Announcements />
      </div>
    </div>
  );
};

export default SingleDoctorPage;
