import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

import { useCallback, useMemo, useState } from "react";

export const useCreateAttendance = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const isPending = useMemo(() => status === "pending", [status]);
  const isSuccess = useMemo(() => status === "success", [status]);
  const isError = useMemo(() => status === "error", [status]);
  const isSettled = useMemo(() => status === "settled", [status]);

  const mutation = useMutation(api.attendancerecords.create);
  const mutate = useCallback(
    async (values, options) => {
      try {
        setData(null);
        setError(null);
        setStatus("pending");
        const res = await mutation(values);
        setData(res);
        setStatus("success");
        options?.onSuccess?.(res);
        return res;
      } catch (err) {
        setError(err);
        setStatus("error");
        if (options.onError) options.onError(err);
        if (options.throwError) throw err;
      } finally {
        setStatus("settled");
        options?.onSettled?.();
      }
    },
    [mutation]
  );

  return { mutate, isError, isPending, isSettled, isSuccess, data, error };
};
