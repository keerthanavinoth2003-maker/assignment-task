export default function PatientView() {
  return (
    <div className="space-y-6">
      {/* Patient Header */}
      <div className="bg-white p-6 rounded shadow flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">OP-2024-0156</h3>
          <p className="text-sm text-gray-500">Sarah Johnson • 34 years</p>

          <div className="mt-2 flex gap-4 text-sm">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">
              Female
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
              O+
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>🌡 101.2°F</div>
          <div>❤️ 88 bpm</div>
          <div>🩺 125/82</div>
          <div>📏 165 cm</div>
        </div>
      </div>

      {/* Diagnosis */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="font-semibold mb-4">Diagnosis</h4>

        <select className="border w-full p-2 rounded mb-4">
          <option>Anxiety Disorder</option>
        </select>

        <textarea
          className="border w-full p-2 rounded"
          rows="4"
          placeholder="Description / Notes"
        />

        <button className="mt-4 bg-red-300 hover:bg-red-400 text-white px-6 py-2 rounded">
          + Add
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 border rounded">Cancel</button>
        <button className="px-6 py-2 bg-red-400 text-white rounded">
          Save
        </button>
      </div>
    </div>
  );
}
