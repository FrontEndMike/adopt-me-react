const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet,{
                animal: "Dog",
                name: "Luna",
                breed: "Pitbull"
            }),
            React.createElement(Pet,{
                animal: "Cat",
                name: "Terry",
                breed: "Maine Coon"
            }),
            React.createElement(Pet,{
                animal: "Tiger",
                name: "Mike",
                breed: "Bengal"
            }),
        ]
    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));