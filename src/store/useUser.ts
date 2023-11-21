import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStoreType = {
	admin_id: string;
	token: string;
};

let userStore = (set: (state: UserStoreType) => void) => ({
	admin_id: "",
	token: "",
	addUser: ({ admin_id, token }: UserStoreType) => {
		set({ admin_id, token });
	},
});

let store = persist(userStore, { name: "auth" });

const useUser = create(store);

export default useUser;
