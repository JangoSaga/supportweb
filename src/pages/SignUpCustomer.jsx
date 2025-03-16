import { useForm } from "react-hook-form";
import { useSignUp } from "../hooks/auth/useSignUp";
import Loading from "../ui/Loading";
import { Link } from "react-router";

function SignUpCustomer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signUp, isLoading } = useSignUp();
  function CreateUser(data) {
    if (!data) return;
    signUp(data, {
      onSettled: () => reset(),
    });
  }
  if (isLoading) return <Loading />;
  return (
    <div
      className="flex flex-col justify-center items-center my-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(./background.jpg)" }}
    >
      <form
        onSubmit={handleSubmit(CreateUser)}
        className="flex flex-col gap-4 bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md "
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input
          type="text"
          {...register("email", {
            required: "email is required",
          })}
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <input
          type="text"
          {...register("name", {
            required: "name is required",
          })}
          placeholder="Enter your name"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
        <input
          type="tel"
          {...register("Contact", {
            required: "Contact is required",
          })}
          placeholder="Enter your contact"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.Contact && (
          <span className="text-red-500">{errors.Contact.message}</span>
        )}
        <input
          type="password"
          {...register("password", {
            required: "password is required",
          })}
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <Link to="/" className="text-blue-500 text-center">
          Already a user? Sign in
        </Link>
      </form>
    </div>
  );
}

export default SignUpCustomer;
