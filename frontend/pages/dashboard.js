import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // redirect if not logged in
    } else {
      // decode JWT to get user info (optional)
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserEmail(payload.sub);
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {userEmail}</p>
    </div>
  );
}
