import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTicket as updateTicketApi } from "../../apis/apiTickets";
import toast from "react-hot-toast";

export function useUpdateTicket() {
  const queryClient = useQueryClient();
  const { mutate: updateTicket, isLoading: isUpdating } = useMutation({
    mutationFn: ({ ticketId, updatedData }) =>
      updateTicketApi(ticketId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["tickets"]);
      toast.success("Ticket updated successfully");
    },
    onError: (error) => {
      toast.error("Error updating ticket");
      console.log(error.message);
    },
  });
  return { updateTicket, isUpdating };
}
