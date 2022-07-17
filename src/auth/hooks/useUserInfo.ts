import { UserInfo } from "../types/userInfo";
import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const fetchUserInfo = async (key?: string): Promise<UserInfo> => {
  let endpoint = "http://localhost:4000/graphql";
  let data = await request(
    endpoint,
    gql`
      query {
        getUser(id: ${key}) {
          _id
          displayName
          email
        }
      }
    `,
  );
  return data;
};

export function useUserInfo(key?: string) {
  return useQuery(["user-info", key], () => fetchUserInfo(key), {
    enabled: !!key,
  });
}
