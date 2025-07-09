
export default function Phase3({ data, onFinish }) {
  if (!data || data.length === 0) {
    return <div className="p-6 text-red-600">No account data found.</div>;
  }

  const cif = data[0]["CIF ID"];
  const category = data[0]["NPA Category"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 p-6 text-orange-900">
      <div className="text-right text-sm font-semibold text-red-600">© P.Raa</div>
      <h2 className="text-2xl font-bold mb-2">CIF ID: {cif}</h2>
      <p className="mb-4 font-semibold">NPA Category: {category}</p>
      <p className="mb-4">Accounts under this CIF: {data.length}</p>

      {data.map((acc, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-4 mb-4">
          <p><strong>Account No:</strong> {acc["Account Number"]}</p>
          <p><strong>Borrower:</strong> {acc["Borrower Name"]}</p>
          <p><strong>NPA Date:</strong> {acc["NPA Date"]}</p>
          <p><strong>CIF Outstanding:</strong> ₹{acc["CIF Outstanding"]}</p>
          <p><strong>Principal O/S:</strong> ₹{acc["Principal O/S"]}</p>
          <p><strong>Settlement:</strong> ₹{acc["Minimum Settlement"]}</p>
          <p><strong>Sacrifice:</strong> ₹{acc["Sacrifice"]}</p>
        </div>
      ))}

      <button
        onClick={onFinish}
        className="mt-6 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
      >
        Finish
      </button>
    </div>
  );
}
