import React, { Component } from "react";
import "./App.css";
// import { blue } from "ansi-colors";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    style: {},
    color: "black"
  };

  changeColor = color => {
    this.setState({ color: color });
  };

  changeStyle = (style, stylesOfStyle) => {
    console.log("IF", this.state.style[style]);
    if (this.state.style[style]) {
      const newStyle = this.state.style;
      newStyle[style] = null;
      this.setState({ style: newStyle });
      console.log("IFAFTER", this.state.style[style]);
    } else {
      console.log("ELSE", this.state.style[style]);
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          [style]: stylesOfStyle
        }
      }));
      console.log("ELSEAFTER", this.state.style[style]);
    }
  };

  render() {
    const styleNames = ["bold", "italic", "underline"];
    const colors = [
      "yellow",
      "blue",
      "red",
      "black",
      "purple",
      "violet",
      "pink"
    ];

    // Giving the upper buttons names
    const stylingBoxes = styleNames.map(style => {
      return (
        <button
          className={`btn btn- ${this.state[style] && "primary"}`}
          onClick={() => this.changeStyle(style, styles[style])}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    // Giving the lower buttons colors
    const colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changeColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            ...this.state.style.bold,
            ...this.state.style.italic,
            ...this.state.style.underline,
            color: this.state.color
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
