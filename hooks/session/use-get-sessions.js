import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const useGetSessions = () => {
  const data = useQuery(api.sessions.get);
  const isLoading = data === undefined;
  return { data, isLoading };
};
