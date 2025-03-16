import { useForm } from "react-hook-form";
import TicketForm from "../components/TicketForm";
import { useUser } from "../hooks/auth/useUser";
import { useAddTicket } from "../hooks/tickets/useAddTicket";
import { useTickets } from "../hooks/tickets/useTickets";
import TicketList from "../components/TicketList";
import Loading from "../ui/Loading";

function CustomerDash() {
  const { user, isLoading } = useUser();
  const { reset } = useForm();
  const { tickets } = useTickets();
  const { addTicket, isAdding } = useAddTicket();
  function createTicket(data) {
    const newTicket = {
      ...data,
      "Contact Email": user?.email,
      userId: user?.id,
      createdAt: new Date().getDate(),
      status: "pending",
    };
    addTicket(newTicket, {
      onSettled: () => {
        reset();
      },
    });
  }
  if (isLoading || isAdding) return <Loading />;
  return (
    <div className="flex md:flex-row flex-col gap-4">
      <TicketForm
        handlerFunction={createTicket}
        initialValues={tickets}
        loadState={isAdding}
      />
      <TicketList tickets={tickets} />
    </div>
  );
}

export default CustomerDash;
