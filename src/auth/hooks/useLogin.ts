import { gql, request } from "graphql-request";
import { useMutation } from "react-query";
const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<string> => {
  let endpoint = "http://localhost:4000/graphql";
  let data = await request(
    endpoint,
    gql`
        mutation {
          login(loginData:{email:${email},password:${password}}),{
              displayName,
              email,
          }
        }
      `,
  );
  return data;
};

export function useLogin() {
  const { isLoading, mutateAsync } = useMutation(login);
  return { isLogginIn: isLoading, login: mutateAsync };
}
