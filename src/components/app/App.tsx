import "./App.css";
import Person from "../../logic/model/Person";
import Persons from "../../logic/model/Persons";
import Cake from "../cake/Cake";

function App() {
  const persons: Person[] = Persons.getList();

  return (
    <div className="App">
      {persons.map((value: Person, index: number) => (
        <div
          key={index}
          className={`person ${value.points === 3 ? "max-points" : ""}`.trim()}
        >
          <Cake level={value.points} />
          <h3 className="name">
            <b>Name:</b> {value.name}
          </h3>
          <h4>
            <b>Points:</b> {value.points}
          </h4>
          <h4>Historic</h4>
          <ul className="historic">
            {value.timestamps.map((value: Date, index: number) => (
              <li key={index}>
                ⏰{" "}
                {new Intl.DateTimeFormat("en-NL", {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(value)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
