import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket as createTicketApi } from "../../apis/apiTickets";
import toast from "react-hot-toast";

export function useAddTicket() {
  const queryClient = useQueryClient();
  const { mutate: addTicket, isLoading: isAdding } = useMutation({
    mutationFn: (ticketData) => createTicketApi(ticketData),
    onSuccess: () => {
      queryClient.invalidateQueries(["tickets"]);
      toast.success("Ticket created successfully");
    },
    onError: (error) => {
      toast.error("Error creating ticket");
      console.log(error.message);
    },
  });
  return { addTicket, isAdding };
}
