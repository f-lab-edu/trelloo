import { useMutation } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import { LoginRequest, LoginResponse } from "./interface";

export const useLoginMutation = () => {
  return useMutation((params: LoginRequest) => {
    return request.post<LoginRequest, LoginResponse>({ path: "/login", isMock: true, params });
  });
};
