import { ILoginRes } from "@/api-response";
import appApi from "./appApi";
import { ILoginReq } from "@/api-request";

export const login = ({ admin_id, password }: ILoginReq) => {
	const data = {
		admin_id,
		password,
	};
	return appApi.post<ILoginRes>("/auth/login", data);
};
