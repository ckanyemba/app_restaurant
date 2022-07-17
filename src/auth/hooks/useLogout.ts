import { useMutation } from "react-query";
import { gql, request } from "graphql-request";

const logout = async (): Promise<string> => {
  let EndPoint = "http://localhost:4000/graphql";
  return await request(
    EndPoint,
    gql`
      mutation {
        logout
      }
    `,
  );
};

export function useLogout() {
  const { isLoading, mutateAsync } = useMutation(logout);

  return { isLoggingOut: isLoading, logout: mutateAsync };
}
