import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/30066064/pexels-photo-30066064/free-photo-of-vibrant-abstract-digital-art-with-grid-overlay.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App


//---------------------------------------------------ChatGPT-------------------------------//

// import { useState } from "react";
// import { InputBox } from "./components";
// import useCurrencyInfo from "./hooks/useCurrencyInfo";

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const { data: currencyInfo, loading, error } = useCurrencyInfo(from);

//   const options = currencyInfo ? Object.keys(currencyInfo) : [];

//   // const swap = () => {
//   //   setFrom(to);
//   //   setTo(from);
//   //   setConvertedAmount(amount);
//   //   setAmount(convertedAmount);
//   // };

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     const newAmount = convertedAmount;
//     setAmount(newAmount);
//     if (currencyInfo[to]) {
//       setConvertedAmount(newAmount * currencyInfo[to]);
//     } else {
//       setConvertedAmount(0);
//     }
//   };
  

//   const convert = () => {
//     if (currencyInfo[to]) {
//       setConvertedAmount(amount * currencyInfo[to]);
//     } else {
//       setConvertedAmount(0); // Handle case when rate for the target currency is not found
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading message until data is available
//   }

//   if (error) {
//     return <div>Error loading currency data</div>; // Show an error message if fetching fails
//   }

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/30066064/pexels-photo-30066064/free-photo-of-vibrant-abstract-digital-art-with-grid-overlay.jpeg?auto=compress&cs=tinysrgb&w=600')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options}
//                 // onCurrencyChange={(currency) => setAmount(amount)}
//                 onCurrencyChange={(currency) => setAmount(currency)}
//                 selectCurrency={from}
//                 onAmountChange={(amount) => setAmount(amount)}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectCurrency={from}
//                 amountDisable
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

