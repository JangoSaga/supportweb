import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket as deleteTicketApi } from "../../apis/apiTickets";
import toast from "react-hot-toast";

export function useDeleteTicket() {
  const queryClient = useQueryClient();
  const { mutate: deleteTicket, isLoading: isDeleting } = useMutation({
    mutationFn: (ticketId) => deleteTicketApi(ticketId),
    onSuccess: () => {
      queryClient.invalidateQueries(["tickets"]);
      toast.success("Ticket deleted successfully");
    },
    onError: () => {
      toast.error("Error deleting ticket");
    },
  });
  return { deleteTicket, isDeleting };
}
