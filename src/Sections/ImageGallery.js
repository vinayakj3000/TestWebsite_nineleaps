import React from "react";
import Section3img from "../Assets/Section3New.png";


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageWidth: 150,
      showText: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      imageWidth: prevState.imageWidth === 150 ? 250 : 150,
      showText: !prevState.showText
    }));
  }

  render() {
    const { imageWidth, showText } = this.state;

    return (
      <div onClick={this.handleClick}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Section3img} alt="Image 1" style={{ width: `${imageWidth}px`, margin: "0 10px" }} />
          <img src={Section3img} alt="Image 2" style={{ width: `${imageWidth}px`, margin: "0 10px" }} />
          <img src={Section3img} alt="Image 3" style={{ width: `${imageWidth}px`, margin: "0 10px" }} />
          <img src={Section3img} alt="Image 4" style={{ width: `${imageWidth}px`, margin: "0 10px" }} />
          <img src={Section3img} alt="Image 5" style={{ width: `${imageWidth}px`, margin: "0 10px" }} />
          <img src={Section3img} alt="Image 6" style={{ width: `${imageWidth}px`, margin: "0 10px" }} />
        </div>
        {showText && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <div style={{ margin: "0 10px" }}>Image 1 description</div>
            <div style={{ margin: "0 10px" }}>Image 2 description</div>
            <div style={{ margin: "0 10px" }}>Image 3 description</div>
            <div style={{ margin: "0 10px" }}>Image 4 description</div>
            <div style={{ margin: "0 10px" }}>Image 5 description</div>
            <div style={{ margin: "0 10px" }}>Image 6 description</div>
          </div>
        )}
      </div>
    );
  }
}

export default ImageGallery;
