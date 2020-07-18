import React from 'react'
import GravityFormForm from 'gatsby-gravityforms-component'
import { AllGravityData } from "../hooks/gravityforms";

function handleError({values, error, reset}){
    console.log(error);
    console.log(values);
}

function handleSuccess({values, reset, confirmations}){
    reset();
    console.log(confirmations);
}

const GravityForm = () => (
    <GravityFormForm
        id={1}
        formData={AllGravityData()}
        lambda={`http://localhost:9000/.netlify/functions/newGfEntry`}
        successCallback={handleSuccess}
        errorCallback={handleError}
    />
)

export default GravityForm
