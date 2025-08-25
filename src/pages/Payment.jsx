import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
      <h1 className="text-3xl font-bold mb-6">💳 Pembayaran</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <input 
          type="text" 
          placeholder="Nama Lengkap" 
          className="w-full mb-4 border p-3 rounded" 
        />
        <input 
          type="text" 
          placeholder="Nomor Kartu" 
          className="w-full mb-4 border p-3 rounded" 
        />
        <input 
          type="text" 
          placeholder="Alamat Pengiriman" 
          className="w-full mb-4 border p-3 rounded" 
        />
        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700">
          Bayar Sekarang
        </button>
      </form>

      <button 
        onClick={() => navigate(-1)} 
        className="mt-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ⬅ Kembali
      </button>
    </div>
  );
}

export default Payment;
