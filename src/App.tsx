import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./store/store";

const App = () => {
    return (
        <div>
            <Provider store={store}>
            <Home />
            </Provider>
        </div>
    );
};

export default App;