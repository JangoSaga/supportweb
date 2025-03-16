/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTickets } from "../hooks/tickets/useTickets";
import { useUser } from "../hooks/auth/useUser";
import Loading from "../ui/Loading";

function TicketForm({ handlerFunction, initialValues, loadState }) {
  const { tickets } = useTickets();
  const { user, isLoading } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [initialTicket, setInitialTicket] = useState(initialValues);

  useEffect(() => {
    setInitialTicket(initialValues);
  }, [initialValues]);

  if (isLoading || loadState) return <Loading />;
  return (
    <div className="flex flex-col gap-4 flex-grow">
      {user?.role === "customer" && (
        <form
          onSubmit={handleSubmit(handlerFunction)}
          className="flex flex-col gap-4 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full "
        >
          <input
            type="text"
            {...register("Title", {
              required: "Title is required",
            })}
            defaultValue={initialTicket?.Title}
            placeholder="Enter the title of the ticket:"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.Title && (
            <span className="text-red-500">{errors.Title.message}</span>
          )}

          <input
            type="text"
            {...register("Description", {
              required: "Description is required",
            })}
            placeholder="Enter the description:"
            defaultValue={initialTicket?.Description}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.Description && (
            <span className="text-red-500">{errors.Description.message}</span>
          )}

          {tickets?.length > 0 && (
            <select
              {...register("Priority", { required: "Priority is required" })}
              defaultValue={initialTicket?.Priority}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Priority</option>
              {Array.from({ length: 10 }, (_, i) => {
                return <option key={i + 1}>{i + 1}</option>;
              })}
            </select>
          )}
          {errors.Priority && (
            <span className="text-red-500">{errors.Priority.message}</span>
          )}
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadState ? "Loading..." : "Submit"}
          </button>
        </form>
      )}
      {user?.role === "agent" && (
        <form
          onSubmit={handleSubmit(handlerFunction)}
          className="flex flex-row gap-4 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full "
        >
          <select
            defaultValue={initialTicket?.status}
            {...register("status")}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Select the status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default TicketForm;
