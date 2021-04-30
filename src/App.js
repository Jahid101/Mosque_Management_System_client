import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Homepage from './Components/Home/Homepage/Homepage';
import Navbar from './Components/Home/Navbar/Navbar';
import Dashboardpage from './Components/Dashboard/Dashboardpage/Dashboardpage';
import ServiceBooking from './Components/Dashboard/ServiceBooking/ServiceBooking';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Feedback from './Components/Dashboard/Feedback/Feedback';
import AddService from './Components/Dashboard/AddService/AddService';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import ManageService from './Components/Dashboard/ManageService/ManageService';
import SelectService from './Components/Dashboard/SelectService/SelectService';



export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboardpage></Dashboardpage>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/feedback">
            <Feedback></Feedback>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/serviceBooking/:id">
            <ServiceBooking></ServiceBooking>
          </PrivateRoute>
          <PrivateRoute path="/serviceBooking">
            <SelectService></SelectService>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
