
import { useState, useEffect } from "react";

const sampleData = [
  {
    "Account Number": "1234567890",
    "CIF ID": "C00010001",
    "Borrower Name": "John Doe",
    "NPA Date": "2022-01-10",
    "CIF Outstanding": 120000,
    "Principal O/S": 90000,
    "Minimum Settlement": 60000,
    "Sacrifice": 30000,
    "NPA Category": "D1"
  },
  {
    "Account Number": "1234567891",
    "CIF ID": "C00010001",
    "Borrower Name": "John Doe",
    "NPA Date": "2022-01-11",
    "CIF Outstanding": 80000,
    "Principal O/S": 60000,
    "Minimum Settlement": 40000,
    "Sacrifice": 20000,
    "NPA Category": "D1"
  }
];

export default function Phase2({ onNext, onBack, language }) {
  const [accountNumber, setAccountNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (accountNumber.length > 5) {
      const found = sampleData.find((acc) => acc["Account Number"] === accountNumber);
      if (!found) {
        setError("Account not found.");
      } else {
        const related = sampleData.filter((acc) => acc["CIF ID"] === found["CIF ID"]);
        setError("");
        onNext(related);
      }
    }
  }, [accountNumber]);

  return (
    <div className="p-6 bg-gradient-to-br from-yellow-100 to-orange-200 min-h-screen">
      <div className="text-right text-sm font-semibold text-red-600">© P.Raa</div>
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">{language === 'hi' ? 'चरण 2: खाता खोजें' : 'Phase 2: Search Account'}</h2>
      <div className="mb-4">
        <label className="block font-semibold text-yellow-900 mb-1">{language === 'hi' ? 'खाता संख्या दर्ज करें:' : 'Enter Account Number:'}</label>
        <input
          type="text"
          className="w-full p-2 border border-yellow-400 rounded"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="px-4 py-2 bg-white border border-yellow-600 text-yellow-700 rounded">Back</button>
      </div>
    </div>
  );
}
