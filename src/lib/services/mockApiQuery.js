import { useQuery } from "@tanstack/react-query";
import { getMocksApi, getGitApi } from "../api/getAxios";

export const useSkills = (language, params = {}) => {
  return useQuery({
    queryKey: ["skills", language],
    queryFn: async () => {
      const { data } = await getMocksApi.get("/skills", {
        params: { ...params, lang: language },
      });
      return data;
    },
  });
};

export const useProjects = (language, params = {}) => {
  return useQuery({
    queryKey: ["projects", language],
    queryFn: async () => {
      const { data } = await getGitApi.get("/projects", {
        params: { ...params, lang: language },
      });
      return data;
    },
  });
};
