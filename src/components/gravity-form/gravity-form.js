import React from 'react'
import GravityFormForm from 'gatsby-gravityforms-component'
import { AllGravityData } from "../../hooks/gravityforms";
import { navigate } from 'gatsby';
import './gravityFormStyles.scss';

function handleError({values, error, reset}){
    console.log(error);
    console.log(values);
}

function handleSuccess({values, reset, confirmations}){
    reset();
    navigate('/contact-us/thank-you');
}

const GravityForm = () => (
    <GravityFormForm
        id={1}
        formData={AllGravityData()}
        lambda={`https://relaxed-dijkstra-ed5f2d.netlify.app/.netlify/functions/newGfEntry`}
        successCallback={handleSuccess}
        errorCallback={handleError}
    />
)

export default GravityForm
