import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signup as signUpApi } from "../../apis/apiUsers";
export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: (userData) => signUpApi(userData),
    onSuccess: () => {
      toast.success("Sign up successful");
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Error signing up");
      console.log(error.message);
    },
  });
  return { signUp, isLoading };
}
