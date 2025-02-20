"use client";

import { useRef, useState } from "react";
import { errorHandler } from "@/utils/errorHandler";
// import { logOut } from "../auth/logout";
import { useRouter } from "next/navigation";

type ExecuteConfig = {
    onError?: (error: any) => void;
};

export type RefreshConfig = {
    shouldRefresh?: boolean;
};

export const useApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isFetching = useRef(false);

    const router = useRouter();

    async function execute<T>(
        callback: () => Promise<T>,
        config?: ExecuteConfig
    ) {
        if (!isFetching.current) {
            try {
                isFetching.current = true;

                setIsLoading(true);
                setError(null);
                return await callback();
            } catch (error: any) {
                const parsedError = errorHandler(error)
                if (parsedError.status == 401) {
                    setError(parsedError.message)
                    // logOut()
                    router.push("/login")
                } else {
                    setError(parsedError.message)
                    // Router.push("/login")
                    // AuthToken().clearToken()
                }
            } finally {
                setIsLoading(false);
                isFetching.current = false;
            }
        }
    }

    return { isLoading, error, execute };
};