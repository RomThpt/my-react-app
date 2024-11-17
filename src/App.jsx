import Student from "./Student";

function App() {
    return (
        <>
            <Student name="John" age={30} isStudent={true} />
            <Student name="Jane" age={25} isStudent={false} />
            <Student name="Marie" age={10} isStudent={true} ></Student>
        </>
    );
}

export default App;
