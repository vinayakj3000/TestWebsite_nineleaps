import React from "react";
import MobileComponent from "./Components/MobileComponent";
import TabletComponent from "./Components/TabletComponent";
import DesktopComponent from "./Components/DesktopComponent";
import "./App.css";
import Login from "./Login/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 767,
      isTablet: window.innerWidth > 767 && window.innerWidth <= 1023,
      isDesktop: window.innerWidth > 1023,
      isLoggedIn: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      isMobile: window.innerWidth <= 767,
      isTablet: window.innerWidth > 767 && window.innerWidth <= 1023,
      isDesktop: window.innerWidth > 1023,
    });
  }
  handleLoginSuccess = () => {
    this.setState({ isLoggedIn: true });
  };
  // const [loggedIn, setLoggedIn] = useState(false);

  render() {
    const { isMobile, isTablet, isDesktop, isLoggedIn } = this.state;
    
    return (
      <div>
        {!isLoggedIn ? (
          <Login onLoginSuccess={this.handleLoginSuccess}></Login>
        ) : (
          <>
            {isMobile && <MobileComponent />}
            {isTablet && <TabletComponent />}
            {isDesktop && <DesktopComponent />}
          </>
        )}
      </div>
    );
  }
}

export default App;
