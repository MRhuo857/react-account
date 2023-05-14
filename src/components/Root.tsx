import { Navigate, Outlet } from "react-router-dom";
import { useLocalStore } from "../stores/useLocalStore";

export const Root: React.FC = () => {
  const {hasReadWelcome} = useLocalStore()
  // const hasReadWelcome = localStorage.getItem('hasReadWelcome')
  if(hasReadWelcome){
    return <Navigate to="/home"/>
  }else{
    return <Navigate to="/welcome/1"/>
  }
};
