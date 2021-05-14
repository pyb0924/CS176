import '../styles/globals.css'
import React, {useEffect} from "react";
import {register,unregister} from "next-offline/runtime";

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp
