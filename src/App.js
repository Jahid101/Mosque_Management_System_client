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
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import SelectService from './Components/Dashboard/SelectService/SelectService';
import AddEvent from './Components/Dashboard/AddEvent/AddEvent';
import AddAnnounce from './Components/Dashboard/AddAnnounce/AddAnnounce';
import ManageEvent from './Components/Dashboard/ManageEvent/ManageEvent';
import ManageAnnounce from './Components/Dashboard/ManageAnnounce/ManageAnnounce';
import AddPrayerTime from './Components/Dashboard/AddPrayerTime/AddPrayerTime';
import ShowEvent from './Components/ShowEvent/ShowEvent';
import MakeDonation from './Components/Dashboard/MakeDonation/MakeDonation';



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
          <PrivateRoute path="/addEvent">
            <AddEvent></AddEvent>
          </PrivateRoute>
          <PrivateRoute path="/addAnnouncement">
            <AddAnnounce></AddAnnounce>
          </PrivateRoute>
          <PrivateRoute path="/addPrayerTime">
            <AddPrayerTime></AddPrayerTime>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/manageEvent">
            <ManageEvent></ManageEvent>
          </PrivateRoute>
          <PrivateRoute path="/manageAnnouncement">
            <ManageAnnounce></ManageAnnounce>
          </PrivateRoute>
          <Route path="/showEvent/:id">
            <ShowEvent></ShowEvent>
          </Route>
          <PrivateRoute path="/makeDonation">
            <MakeDonation></MakeDonation>
          </PrivateRoute>
          <PrivateRoute path="/serviceBooking/:id">
            <ServiceBooking></ServiceBooking>
          </PrivateRoute>
          <PrivateRoute path="/serviceBooking">
          <ServiceBooking></ServiceBooking>
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
