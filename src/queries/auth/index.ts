import { useMutation } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import { type LoginRequest, type LoginResponse } from "./interface";

export const useLoginMutation = () => {
  return useMutation(async (data: LoginRequest) => {
    return await request.post<LoginResponse>({ path: "/login", isMock: true, data });
  });
};
