// import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const navigation = useNavigate()
    const isBrowser = typeof window !== "undefined";

    const session = isBrowser ? localStorage.getItem('token') || false : false;
    useEffect(() => {
      if (!session) {
        navigation('/');
      }
    }, []);

    if (!session) {
      return null;
    }

    // return <Component {...props} />;
  };
}
