import { useState } from "react";
import { sendEmail } from "@/utils/functions/sendEmail";

export function useSendEmail() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const send = async (formData) => {
    setLoading(true);
    const res = await sendEmail(formData);
    setResponse(res);
    setLoading(false);
  };

  return { send, loading, response };
}
