import { useQuery } from "@tanstack/react-query";
import { getMocksApi, getGitApi } from "../api/getAxios";

export const useSkills = (language) => {
  return useQuery({
    queryKey: ["skills", language],
    queryFn: async () => {
      const { data } = await getMocksApi.get("/skills", {
        params: { lang: language },
      });
      return data;
    },
  });
};

export const useProjects = (language) => {
  return useQuery({
    queryKey: ["projects", language],
    queryFn: async () => {
      const { data } = await getGitApi.get("");
      return data;
    },
  });
};
