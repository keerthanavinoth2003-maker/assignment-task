import { useNavigate } from "react-router-dom";

export default function Appointments() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded shadow">
      <div className="p-4 border-b flex justify-between">
        <h3 className="font-semibold">Appointments</h3>
        <input
          placeholder="Search"
          className="border px-3 py-1 rounded"
        />
      </div>

      {/* <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead> */}

        {/* <tbody>
          <tr className="border-t hover:bg-gray-50">
            <td className="p-3">Sarah Johnson</td>
            <td>10/04/2024</td>
            <td>09:00</td>
            <td>
              <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">
                Upcoming
              </span>
            </td>
            <td className="text-right pr-4">
              <button
                onClick={() => navigate("/patient/1")}
                className="text-blue-600 text-sm"
              >
                View
              </button>
            </td>
          </tr>
        </tbody> */}
        <table className="w-full border-collapse">
  <thead>
    <tr className="text-center">
      <th className="text-left">Patient</th>
      <th>Date</th>
      <th>Time</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    <tr className="text-center align-middle">
      <td className="text-left">Sarah Johnson</td>
      <td>10/04/2024</td>
      <td>09:00</td>
      <td>
        <span className="px-3 py-1 rounded bg-purple-100 text-purple-700">
          Upcoming
        </span>
      </td>
      <td className="text-right pr-4">
              <button
                onClick={() => navigate("/patient/1")}
                className="text-blue-600 text-sm"
              >
                View
              </button></td>
    </tr>
  </tbody>
</table>

     
    </div>
  );
}
