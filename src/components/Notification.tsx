"use client"
import { IoIosNotificationsOutline } from "react-icons/io";
export default function Notifications({ logs }: { logs: any[] }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg ">
    <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700 mb-2">Notifications</h3>
       <p><IoIosNotificationsOutline className="text-xl"/></p>
    </div>
      <p className="text-sm pb-6">Recent platform activity</p>
      <hr />
      <ul className="text-sm pt-6">
        {logs.map((log, idx) => (
          <li key={idx} className="py-4  text-gray-600">
            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${log.type === 'flag' ? 'bg-red-500' : 'bg-blue-500'}`}></span>
            {log.message}
           
            <br />
            <span className="text-xs text-gray-400 ml-2">{log.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}