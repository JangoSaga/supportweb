import { useState } from "react";
import { useDeleteTicket } from "../hooks/tickets/useDeleteTicket";
import { useUpdateTicket } from "../hooks/tickets/useUpdateTicket";
import TicketForm from "./TicketForm";
import { useUser } from "../hooks/auth/useUser";
import Loading from "../ui/Loading";

/* eslint-disable react/prop-types */
function Ticket({ ticket }) {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const { deleteTicket, isDeleting } = useDeleteTicket();
  const { updateTicket, isUpdating } = useUpdateTicket();

  function handleDelete() {
    deleteTicket(ticket.id);
  }

  function handleUpdate(data) {
    updateTicket(
      { ticketId: ticket?.id, updatedData: data },
      {
        onSettled: () => {
          setIsEditing(false);
        },
      }
    );
  }

  if (isDeleting || isUpdating)
    return (
      <tr>
        <td colSpan="5">
          <Loading />
        </td>
      </tr>
    );

  return (
    <>
      <tr key={ticket.id}>
        <td className="py-2 px-4 border-b text-center">{ticket.Title}</td>
        <td className="py-2 px-4 border-b text-center">{ticket.Description}</td>
        <td className="py-2 px-4 border-b text-center">
          {ticket.createdAt.toString()}
        </td>
        <td className="py-2 px-4 border-b text-center">{ticket.status}</td>
        <td className="py-2 px-4 border-b text-center">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsEditing((s) => !s)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {!isEditing ? "Edit" : "Cancel"}
            </button>
            {user?.role !== "agent" && (
              <button
                onClick={() => handleDelete()}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Delete
              </button>
            )}
          </div>
        </td>
      </tr>
      {isEditing && (
        <tr>
          <td colSpan="5">
            <TicketForm handlerFunction={handleUpdate} initialValues={ticket} />
          </td>
        </tr>
      )}
    </>
  );
}

export default Ticket;
