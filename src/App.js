import React, { Component } from 'react';

//import thunk from 'redux-thunk';
//import reducer from './store/reducer';
//import { setWeather, setCity, fetchWeatherByCity } from './store/actions';

import './App.css';
import { Main, Header } from './components';

class App extends Component {
  render() {
    return (  
          <div className="App">
            <Header />
            <Main />
          </div>     
    );
  }
}

// store.subscribe(() => {
//   console.log('store', store.getState());
// })

export default App;
//провайдер и роутер и руты и свитч
// <Provider
//    <brouserrOUTER
//      <Switch
//         <AuthLayout
//           <Route exacr path="/" component ={Homepage}
//           <Route exacr path="/" component={ProductListing}
//         <UnauthLatout
//            <div> 404 </div>
// export default App;

// import {Formik, Field} from '';

// const Input = ({field}) => {
//   <input type="text" {...field}/>
// }


// class LocalForm extends Component {
//   render () {
//     return (
//       <form onSubmit={this.handSubmit}>
//         <Field name="surname" component={Input} />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }


// class ConnetWithForm extends Component {
//   handleSubmit = value => {   
//     console.log('value');
//   }

//   renderContent = ({ handleSubmit}) => {
//       <LocalForm onSubmit={handleSubmit} />
//   }

//   render() {
//     return (
//       <div>
//         <Formik 
//           onSubmit={this.handSubmit}
//           render={this.renderContent}
//         />
//       </div>
//     );
//   }
// }