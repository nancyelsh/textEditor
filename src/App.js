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
    color: "black",
    backgroundColor: null
  };

  changeColor = color => {
    this.setState({ color: color });
  };

  changeStyle = style => {
    // if (this.state.style["fontWeight"]) {
    //   this.setState({
    //     style: {
    //       fontWeight: ""
    //     },
    //     backgroundColor: null
    //   });
    // } else if (this.state.style["fontStyle"]) {
    //   this.setState({
    //     style: {
    //       fontStyle: ""
    //     },
    //     backgroundColor: null
    //   });
    // } else if (this.state.style["textDecorationLine"]) {
    //   this.setState({
    //     style: {
    //       textDecorationLine: ""
    //     },
    //     backgroundColor: null
    //   });
    // } else {
    this.setState(prevState => ({
      style: {
        ...prevState.style,
        ...style
      }
      // backgroundColor: "blue"
    }));
    // }

    console.log(this.state.style);
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
          onClick={() => this.changeStyle(styles[style])}
          style={{
            backgroundColor: this.state.backgroundColor,
            ...styles[style]
          }}
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
        {/* <textarea style={{ color: this.state.textStyle }} /> */}
        <textarea style={{ ...this.state.style, color: this.state.color }} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
