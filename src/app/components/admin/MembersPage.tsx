const dummyMembers = [
  { id: 1, name: "Juan Pérez", email: "juan@example.com" },
  { id: 2, name: "Ana Gómez", email: "ana@example.com" },
];

export default function MembersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Activar nuevos miembros</h1>
      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nombre</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dummyMembers.map((m) => (
            <tr key={m.id} className="border-t">
              <td className="p-3">{m.name}</td>
              <td className="p-3">{m.email}</td>
              <td className="p-3 text-center">
                <ApproveRejectButtons
                  onApprove={() => {}}
                  onReject={() => {}}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ApproveRejectButtons({
  onApprove,
  onReject,
}: {
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <div className="flex gap-2 justify-center">
      <button
        onClick={onApprove}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Aprobar
      </button>
      <button
        onClick={onReject}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Rechazar
      </button>
    </div>
  );
}
