import { Navigate, Outlet } from "react-router-dom";

export const Root: React.FC = () => {
  const hasReadWelcome = localStorage.getItem('hasReadWelcome')
  if(hasReadWelcome === 'yes'){
    return <Navigate to="/home"/>
  }else{
    return <Navigate to="/welcome/1"/>
  }
};
