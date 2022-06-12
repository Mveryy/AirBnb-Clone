import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./data";

export default function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />;
    });
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="cards">{cards}</div>
        </div>
    );
}
