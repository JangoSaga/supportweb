import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../apis/apiUsers";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.invalidateQueries(["user"]);
      toast.success(`Login successfull as ${user?.role}`);
      if (user.role == "customer") {
        navigate("/customer-dashboard");
      } else {
        navigate("/agent-dashboard");
      }
    },
    onError: (error) => {
      toast.error(`Login failed`);
      console.log(error.message);
    },
  });
  return { login, isLoading, error };
}
