import { useState } from "react";
import { nanoid } from "nanoid";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";

import "./App.css";

function App() {
    let [parkingLotItems, setParkingLotItems] = useState([
        {
            id: nanoid(),
            date: "27/06/2023",
            priority: "Low",
            link: "https://google.com/",
            description: "This is where you can find the ultimate source of truth.",
        },
        {
            id: nanoid(),
            date: "29/08/2023",
            priority: "Medium",
            link: "https://react.dev/",
            description: "React documentation and tutorial",
        },
    ]);

    function addItem(date, link, description, priority) {
        setParkingLotItems((oldItems) => [
            ...oldItems,
            {
                id: nanoid(),
                date,
                description,
                link,
                priority,
            },
        ]);
    }

    function deleteItem(id) {
        setParkingLotItems((oldItems) => oldItems.filter((item) => item.id !== id));
    }

    return (
        <div className="App">
            <header>
                <h1>Browser Parking Lot</h1>
                <p>Send most of your browser tabs into retirement.</p>
            </header>
            <main>
                <ParkingLotForm addItem={addItem} />
                <ParkingLotList parkingLotItems={parkingLotItems} deleteItem={deleteItem} />
            </main>
        </div>
    );
}

export default App;
