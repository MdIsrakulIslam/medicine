"use client"
import { IoIosNotificationsOutline } from "react-icons/io";
export default function Notifications({ logs }: { logs: any[] }) {
  return (
    <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-900">Notifications</h3>
        <IoIosNotificationsOutline className="text-xl text-gray-500"/>
      </div>
      <p className="text-sm text-gray-500 mb-4">Recent platform activity</p>
      <hr className="border-gray-200 mb-4 " />
      
      <div className="space-y-4 max-h- overflow-y-auto">
        {logs.map((log, idx) => (
          <div key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-b-0">
            <span 
              className={`inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                log.type === 'flag' ? 'bg-red-500' : 'bg-blue-500'
              }`}
            ></span>
            <div className="flex-1 min-w-0">
                <h1 className=" leading-relaxed">{log.heading}</h1>
              <p className="text-sm text-gray-600 leading-relaxed">{log.message}</p>
              
              <p className="text-xs text-gray-400 mt-1">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
