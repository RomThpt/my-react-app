import List from "./List";
function App() {
    const fruits = [
        { id: 1, name: "orange", calories: 45 },
        { id: 2, name: "kiwi", calories: 45 },
        { id: 3, name: "pinaeapple", calories: 37 },
    ];

    fruits.sort((a, b) => a.calories - b.calories);

    const lowCalFruits = fruits.filter((fruit) => fruit.calories < 40);
    return (
        <>
            {fruits.length > 0 ? (
                <List items={fruits} category="Fruit" />
            ) : (
                <p>No fruits</p>
            )}
        </>
    );
}

export default App;
