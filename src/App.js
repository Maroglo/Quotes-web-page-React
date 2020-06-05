import React from "react";
import Home from "./Home";
import Places from "./Places";

export const ConfigContext = React.createContext();
const pageToShow = pageName => {
    if(pageName === "Home") return <Home />;
    if (pageName === "Places") return <Places />;
    return <div>Not Found</div>;
};

const configValue = {
    showSignUpInput: false,
    showPlacesForDays: true
};
const App = ({pageName}) => {
    return(
        <ConfigContext.Provider value={configValue}>
            <div>{pageToShow(pageName)}</div>;
        </ConfigContext.Provider>
    )
};

export default App;