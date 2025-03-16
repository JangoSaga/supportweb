import { useQuery } from "@tanstack/react-query";
import { useUser } from "../auth/useUser";
import { fetchTicketsByUser } from "../../apis/apiTickets";
import { fetchAllTickets as fetchAllTicketsApi } from "../../apis/apiTickets";
export function useTickets() {
  const { user } = useUser();
  const { data: tickets, isLoading } = useQuery({
    queryKey: ["tickets"],
    queryFn:
      user?.role === "customer"
        ? () => fetchTicketsByUser(user.id)
        : () => fetchAllTicketsApi(),
  });
  return { tickets, isLoading };
}
