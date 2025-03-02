import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import * as XLSX from "xlsx";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
const RegisterUsers = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { signIn } = useAuthActions();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRegister = async () => {
    if (!file) {
      setError("Please upload a file.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Assuming the first sheet is the relevant one
        const users = XLSX.utils.sheet_to_json(sheet);
        console.log(users);
        for (const user of users) {
          try {
            await signIn("password", {
              email: user.email,
              password: user.password,
              name: user.name,
              prn: user.prn,
              ticket: user.ticket,
              flow: "signUp",
            });
          } catch (error) {
            setError("Error: " + JSON.stringify(error));
          }
        }
        setLoading(false);
        setSuccessMessage("All users have been successfully registered!");
      };
      reader.readAsBinaryString(file);
    } catch (err) {
      setLoading(false);
      setError("Error uploading or processing file.");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <input type="file" hidden onChange={handleFileChange} />
        <Button
          variant="outline"
          onClick={() => document.querySelector("input[type='file']")?.click()}
        >
          <Upload />
          {file ? file.name : "Upload Users Data"}
        </Button>
        <Button onClick={handleRegister} disabled={loading || !file}>
          {loading ? "Registering..." : "Register"}
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}
    </div>
  );
};

export default RegisterUsers;
