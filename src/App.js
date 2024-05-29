import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { displayResultString: "0", string: "" };

  check = (no) => {
    const { string } = this.state;
    let tempString = string + no;

    this.setState({ string: tempString, displayResultString: tempString });
  };

  clickedResult = () => {
    const { string } = this.state;
    const result = eval(string);
    this.setState({
      string: result.toString(),
      displayResultString: result.toString(),
    });
  };

  clickedSingleClear = () => {
    const { string } = this.state;
    let tempString = string;
    tempString = tempString.slice(0, tempString.length - 1);
    this.setState({ displayResultString: tempString, string: tempString });
  };

  clickedClear = () => {
    this.setState({ displayResultString: "0", string: "" });
  };

  render() {
    const { displayResultString } = this.state;
    return (
      <div className="calculator-bg-container">
        <div className="calculator-container">
          <p className="result" id="resultElement">
            {displayResultString}
          </p>
          <div className="container">
            <div className="row">
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("7")}
                >
                  7
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("8")}
                >
                  8
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("9")}
                >
                  9
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button operator-bg"
                  onClick={() => this.check("+")}
                >
                  +
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("4")}
                >
                  4
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("5")}
                >
                  5
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("6")}
                >
                  6
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button operator-bg"
                  onClick={() => this.check("-")}
                >
                  -
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("1")}
                >
                  1
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("2")}
                >
                  2
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("3")}
                >
                  3
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button operator-bg"
                  onClick={() => this.check("*")}
                >
                  *
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={() => this.check("0")}
                >
                  0
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={this.clickedSingleClear}
                >
                  DEL
                </button>
              </div>

              <div className="col-3 c-button-container">
                <button
                  className="calculator-button"
                  onClick={this.clickedClear}
                >
                  AC
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button operator-bg"
                  onClick={() => this.check("/")}
                >
                  /
                </button>
              </div>
              <div className="col-3 c-button-container">
                <button
                  className="calculator-button operator-bg"
                  onClick={() => this.check(".")}
                >
                  .
                </button>
              </div>
              <div className="col-9 c-button-container">
                <button
                  className="calculator-button equalto-button"
                  onClick={() => this.clickedResult()}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
