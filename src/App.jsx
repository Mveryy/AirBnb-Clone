import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="cards">
                <Card
                    img="./src/images/katie-zaferes.png"
                    rate="5.0"
                    rateNumber="6"
                    text="Life lessons with Katie Zaferes"
                    price="136"
                />
                <Card
                    img="./src/images/wedding-photography.png"
                    rate="5.0"
                    rateNumber="30"
                    text="Learn wedding photography"
                    price="125"
                />
                <Card
                    img="./src/images/mountain-bike.png"
                    rate="4.8"
                    rateNumber="2"
                    text="Group Mountain Biking"
                    price="50"
                />
            </div>
        </div>
    );
}
