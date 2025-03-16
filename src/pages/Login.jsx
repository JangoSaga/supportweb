import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/auth/useLogin";
import Loading from "../ui/Loading";
import { Link } from "react-router";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { login, isLoading } = useLogin();
  function validateUser(data) {
    if (!data) return;
    login(data, {
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
        onSubmit={handleSubmit(validateUser)}
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
        {/* <Link to="/signup" className="text-blue-500 text-center">
          Sign Up, as Customer
        </Link> */}
      </form>
    </div>
  );
}

export default Login;
