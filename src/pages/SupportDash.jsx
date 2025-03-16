import TicketList from "../components/TicketList";
// import { useAllTickets } from "../hooks/tickets/useAllTickets";
import { useTickets } from "../hooks/tickets/useTickets";
import Loading from "../ui/Loading";

function SupportDash() {
  const { tickets, isLoading } = useTickets();
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col gap-4">
      <TicketList tickets={tickets} />
    </div>
  );
}

export default SupportDash;
