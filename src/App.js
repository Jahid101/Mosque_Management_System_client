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
import ServiceBooking from './Components/Dashboard/ServiceBooking/ServiceBooking';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Feedback from './Components/Dashboard/Feedback/Feedback';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import AddEvent from './Components/Dashboard/AddEvent/AddEvent';
import AddAnnounce from './Components/Dashboard/AddAnnounce/AddAnnounce';
import ManageEvent from './Components/Dashboard/ManageEvent/ManageEvent';
import ManageAnnounce from './Components/Dashboard/ManageAnnounce/ManageAnnounce';
import AddPrayerTime from './Components/Dashboard/AddPrayerTime/AddPrayerTime';
import ShowEvent from './Components/ShowEvent/ShowEvent';
import MakeDonation from './Components/Dashboard/MakeDonation/MakeDonation';
import DonationList from './Components/Dashboard/DonationList/DonationList';
import DonationYouMade from './Components/Dashboard/DonationYouMade/DonationYouMade';
import Fund from './Components/Dashboard/Fund/Fund';
import ShowAnnouncement from './Components/ShowAnnouncement/ShowAnnouncement';
import Email from './Components/Email/Email';
import Contact from './Components/Contact/Contact';
import Welcome from './Components/Dashboard/Welcome/Welcome';



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
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/email">
            <Email></Email>
          </Route>
          <PrivateRoute path="/dashboard">
            <Welcome></Welcome>
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
          <PrivateRoute path="/donationList">
            <DonationList></DonationList>
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
          <PrivateRoute path="/fund">
            <Fund></Fund>
          </PrivateRoute>
          <Route path="/showEvent/:id">
            <ShowEvent></ShowEvent>
          </Route>
          <Route path="/showAnnouncement/:id">
            <ShowAnnouncement></ShowAnnouncement>
          </Route>
          <PrivateRoute path="/makeDonation">
            <MakeDonation></MakeDonation>
          </PrivateRoute>
          <PrivateRoute path="/donationYouMade">
            <DonationYouMade></DonationYouMade>
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
