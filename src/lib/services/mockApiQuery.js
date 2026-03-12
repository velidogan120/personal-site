import { useQuery } from "@tanstack/react-query";
import { getMocksApi, getGitApi } from "../api/getAxios";

export const useSkills = (language, config = {}) => {
  return useQuery({
    queryKey: ["skills", language],
    queryFn: async () => {
      const { data } = await getMocksApi.get("/skills", {
        ...config,
        params: { lang: language },
      });
      return data;
    },
  });
};

export const useProjects = (language, config = {}) => {
  return useQuery({
    queryKey: ["projects", language],
    queryFn: async () => {
      const { data } = await getGitApi.get("/projects", {
        ...config,
        params: { lang: language },
      });
      return data;
    },
  });
};
