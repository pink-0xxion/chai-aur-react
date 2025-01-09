import { useEffect, useState } from "react"; 

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/API/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates));
        console.log(data);
        
        
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;


//--------------------------ChatGPT------------------------------------------//


// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState(null); // Change to null to represent "no data yet"
//   const [loading, setLoading] = useState(true); // Loading state to track if the data is being fetched
//   const [error, setError] = useState(null); // Error state in case the fetch fails

//   useEffect(() => {
//     setLoading(true); // Set loading to true whenever the effect runs
//     setError(null); // Reset any previous error

//     // fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)

//     fetch(`https://v6.exchangerate-api.com/v6/API/latest/${currency}`)
//       .then((res) => res.json())
//       .then((res) => {
//         // setData(res[currency]); // Set the fetched data
//         setData(res.conversion_rates);
//         setLoading(false); // Set loading to false once data is fetched
//         console.log("Fetched data:", res);
//       })
//       .catch((err) => {
//         console.error("Error fetching currency data:", err);
//         setError(err); // If there's an error, store it
//         setLoading(false); // Set loading to false even on error
//       });
//   }, [currency]);

//   return { data, loading, error }; // Return data, loading and error states
// }

// export default useCurrencyInfo;

//--------------------------------------------------------------------//





// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json    <---not worked
// free one: https://api.exchangerate-api.com/v4/latest/${currency}

// so main difference is component returns UI, and custom hooks return values like states and reusable functions  <---SEE-IT