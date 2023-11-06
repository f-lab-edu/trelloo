import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import { LoginRequest, LoginResponse } from "./interface";

const authKeys = {
  all: ["auth"] as const,
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: LoginRequest) => {
      return request.post<LoginResponse>({ path: "/login", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(authKeys.all),
    },
  );
};
