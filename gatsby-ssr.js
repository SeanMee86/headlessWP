/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";

export const onRenderBody = ({setHeadComponents}) => {
    setHeadComponents([
        <link href="https://www.googletagmanager.com/gtag/js?id=GTM-TDSKB9Q" rel="preload" as="script"/>,
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />,
        <script src="https://73f6c8313e3d44a2bdef7d6220d114fd.js.ubembed.com" async/>
    ])
}

