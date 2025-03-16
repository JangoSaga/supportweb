import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../apis/apiUsers";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logout successfull");
      queryClient.clear();
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { logout, isLoading };
}
