import { useMutation } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import { LoginRequest, LoginResponse } from "./interface";

export const useLoginMutation = () => {
  return useMutation(async (params: LoginRequest) => {
    return await request.post<LoginResponse>({ path: "/login", isMock: true, params });
  });
};
