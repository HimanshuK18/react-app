import { Navigate } from "react-router-dom";
import { Children } from 'react';
type ProtectedPropsType = {
    isLoggedIn: boolean,
    children: any
};

const Protected = ({ isLoggedIn, children }: ProtectedPropsType) => {
    if (!isLoggedIn) {
        return ( <Navigate to="/" replace />);
    }
    return children;
};
export default Protected;