import './App.css';
import Nav from './components/Navbar';
import MyRoutes from './Routes';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Nav /> 
            <Header/> 
            <MyRoutes/>
            <Footer/> 
        </div>
    );
}
export default App;
