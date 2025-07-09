
import { useState } from "react";

export default function Phase1({ onNext, language, setLanguage, setUser }) {
  const [solId, setSolId] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleProceed = () => {
    const sol = Number(solId.trim());
    if (!isNaN(sol) && sol >= 8701 && sol <= 8771 && userName.trim() !== "") {
      setError("");
      setUser(userName.trim());
      onNext();
    } else {
      setError("Please enter a valid SOL ID (8701–8771) and your name.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">OTS NIVARAN</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4">
        <div>
          <label className="block text-blue-900 font-semibold mb-1">Your Name:</label>
          <input
            type="text"
            className="w-full p-2 border border-blue-300 rounded"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-blue-900 font-semibold mb-1">SOL ID (8701–8771):</label>
          <input
            type="number"
            className="w-full p-2 border border-blue-300 rounded"
            value={solId}
            onChange={(e) => setSolId(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-blue-900 font-semibold">Language:</label>
          <select
            className="border p-2 rounded border-blue-300"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          onClick={handleProceed}
          className="w-full py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800"
        >
          Proceed
        </button>
      </div>
      <div className="mt-6 text-red-600 font-bold text-sm">© P.Raa</div>
    </div>
  );
}
