import { useEffect, useState } from "react";

const[data,setdata] = useState({})
function useCurrencyInfo(currency)
{
    useEffect(() =>  {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        return data;
    },[currency])
}

export default useCurrencyInfo;