import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";
import Eleven from "./Eleven";
import Twelve from "./Twelve";
import Thirteen from "./Thirteen";
import Fourteen from "./Fourteen";
import Fifteen from "./Fifteen";
import Sixteen from "./Sixteen";
import Seventeen from "./Seventeen";
import Eighteen from "./Eighteen";
import Nineteen from "./Nineteen";
import NineteenComp from "./NineteenComp";
import { ThemeProvider } from "./ThemeContext";
import Twenty from "./Twenty";
import { CartProvider } from "./CartContext";
import TwentyOne from "./TwentyOne";
import TwentyTwo from "./TwentyTwo";
import TwentyThree from "./TwentyThree";
import TwentyFour from "./TwentyFour";
import { AuthProvider } from "./AuthContext";
import TwentyFive from "./TwentyFive";
import TwentySix from "./TwentySix";
import { LocalizationProvider } from "./LocalizationContext";
import TwentySeven from "./TwentySeven";
import TwentyEight from "./TwentyEight";
import TwentyNine from "./TwentyNine";
import ThirtyOne from "./ThirtyOne";
import EventListenersExample from "./TodoApp/EventListenersExample";
import CallbackHell from "./component/CallbackHell";
import CreatePromise from "./component/CreatePromise";
import HandleCallbackHell from "./component/HandleCallbackHell";
import Promises from "./component/promises";
import PromiseChain from "./component/PromiseChain";
import PromisApi from "./component/promisApi";
import AsyncAwait from "./component/AsyncAwait";
import SetTimeout from "./component/SetTimeout";
import AsyncAwait1 from "./component/AsyncAwait1";
import UseRefExample from "./Hooks/Useref";
import MainHooks from "./Hooks/ManiHooks";
import Debounce from "./Debounce";
import Throttle from "./Throttle";
import AxiosCall from "./AxiosCall";
import LazyLoading from "./LazyLoading";
import Pagination from "./Pagination";
export default function App() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Another Item",
    "Another Item 2",
  ];
  return (
    <div>
      {/* <One/> */}
      {/* <Two/> */}
      {/* <Three/> */}
      {/* <Debounce /> */}
      {/* <Throttle /> */}
      {/* <Four/> */}
      {/* <Five/> */}

      {/* Api call */}
      {/* <Six /> */}
      {/* <AxiosCall /> */}

      {/* <Seven/> */}
      {/* <Eight/> */}
      {/* <Nine/> */}

      {/* routes */}
      {/* <Ten/>  */}
      {/* <LazyLoading/> */}

      {/* <Eleven/> */}
      {/* <Twelve/> */}

      {/* login */}
      {/* <Thirteen/> */}

      {/* <Fourteen/> */}
      {/* <Fifteen items={items}/> */}

      {/* pagination */}
      {/* <Sixteen items={items} itemsPerPage={2}/> */}
      {/* <Pagination /> */}

      {/* <Seventeen/> */}
      {/* <Eighteen/> */}

      {/* <ThemeProvider>
        <div className="App">
          <Nineteen />
          <NineteenComp />
        </div>
      </ThemeProvider> */}

      {/* <CartProvider>
        <Twenty />
      </CartProvider> */}

      {/* usereducer example */}
      {/* <TwentyOne /> */}
      {/* <TwentyTwo/> */}
      {/* <TwentyThree/> */}

      {/* <AuthProvider>
        <TwentyFour />
      </AuthProvider> */}

      {/* <TwentyFive/> */}

      {/* <LocalizationProvider>
        <TwentySix />
      </LocalizationProvider> */}

      {/* axios example */}
      {/* <TwentySeven/> */}
      {/* <TwentyEight/> */}

      {/* image galary */}
      {/* <TwentyNine/> */}

      {/* <EventListenersExample /> */}
      {/* <ThirtyOne/> */}

      
      {/* <SetTimeout/> */}
      {/* <CallbackHell /> */}
      {/* <HandleCallbackHell /> */}
      {/* <CreatePromise /> */}
      {/* <Promises /> */}
      {/* <PromiseChain /> */}
      {/* <PromisApi/> */}
      {/* <AsyncAwait/> */}
      {/* <AsyncAwait1/> */}
      {/* <UseRefExample/> */}
      {/* <MainHooks/> */}
    </div>
  );
}
