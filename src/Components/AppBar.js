import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from './Drawer';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pink600, red400} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    textColor: pink600,
  },
  appBar: {
    height: 200,
    zIndex: 50,
  },
  titleStyle: {
    color: red400,
  },
  
}); 

const AppBarExampleIcon = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      title="Developer Fitz"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      drawer={<Drawer />}
    /> 
  </MuiThemeProvider>
    
);

export default AppBarExampleIcon;



// import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';

// class Login extends Component {
//   static muiName = 'FlatButton';

//   render() {
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }

// const Logged = (props) => (
//   <IconMenu
//     {...props}
//     iconButtonElement={
//       <IconButton><MoreVertIcon /></IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// );

// Logged.muiName = 'IconMenu';

// /**
//  * This example is taking advantage of the composability of the `AppBar`
//  * to render different components depending on the application state.
//  */
// class AppNavBar extends Component {
//   state = {
//     logged: true,
//   };

//   handleChange = (event, logged) => {
//     this.setState({logged: logged});
//   };

//   render() {
//     return (
//       <div>
//         <Toggle
//           label="Logged"
//           defaultToggled={true}
//           onToggle={this.handleChange}
//           labelPosition="right"
//           style={{margin: 20}}
//         />
//         <AppBar
//           title="Title"
//           iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//           iconElementRight={this.state.logged ? <Logged /> : <Login />}
//         />
//       </div>
//     );
//   }
// }

// export default AppNavBar;











// class Header extends React.Component {
//   render() {
//     // const if needed
//     const company = 'The Header goes here'
//     // return something from the component that you want to render
//     return (
//       <div className='Header'>{company}</div>
//     )
//   }
// }

// export default Header;