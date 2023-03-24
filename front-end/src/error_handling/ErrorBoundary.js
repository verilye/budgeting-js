import React from "react";
import ErrorPage from "./ErrorPage";


export default class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);

        this.state={
            hasError:false,
            error:undefined,
        };
    }

    static getDerivedStateFromError(error){

        return{
            hasError:true,
            error:error,
        };

    }

    componentDidCatch(error,errInfo){

        console.log("Error caught!");
        console.error(error);
        console.error(errInfo);

    }

    render(){
        if(this.state.hasError){
            return <ErrorPage/>;
        } else{
            return this.props.children;
        }
    }

}