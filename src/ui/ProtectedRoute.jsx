/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
                 height:100vh;
                 background-color:var(--color-grey-50);
                 display:flex;
                 align-items:center;
                 justify-content:center;`;

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    // 1. Load the authentecated user
    const {user, isLoading, isAuthenticated} = useUser();
    console.log(user)
    //2. If theere is no authenticated user, redirect to the /login

    useEffect(function(){
        if(!isAuthenticated && !isLoading) navigate('/login');
    },[isAuthenticated,isLoading,navigate])

    //3. While loading, show spinner
        if(isLoading) return <FullPage>
        <Spinner />
    </FullPage> 

    //4. If there is a user, render the app
    if(isAuthenticated) return children;
}

export default ProtectedRoute;
