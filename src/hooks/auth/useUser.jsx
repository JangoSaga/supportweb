import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../apis/apiUsers";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { user, isLoading };
}
