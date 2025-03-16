import Ticket from "./Ticket";

/* eslint-disable react/prop-types */
function TicketList({ tickets }) {
  return (
    <div className="overflow-x-auto">
      {tickets?.length ? (
        <table className="table-auto w-full rounded-2xl overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <Ticket ticket={ticket} key={ticket?.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Tickets found</div>
      )}
    </div>
  );
}

export default TicketList;
