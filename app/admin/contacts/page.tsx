import { prisma } from "@/lib/prisma";

export default async function AdminContactsPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className={`bg-white p-6 rounded-lg border ${
            !contact.read ? 'border-blue-300' : ''
          }`}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{contact.name}</h3>
                <p className="text-sm text-slate-600">{contact.email}</p>
              </div>
              <span className="text-xs text-slate-500">
                {new Date(contact.createdAt).toLocaleDateString()}
              </span>
            </div>
            {contact.subject && (
              <p className="text-sm font-medium mb-2">Subject: {contact.subject}</p>
            )}
            <p className="text-slate-700">{contact.message}</p>
          </div>
        ))}
        
        {contacts.length === 0 && (
          <p className="text-center py-8 text-slate-600">No messages yet</p>
        )}
      </div>
    </div>
  );
}
