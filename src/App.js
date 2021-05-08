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
import UpdateEvent from './Components/Dashboard/UpdateEvent/UpdateEvent';
import Fund from './Components/Dashboard/Fund/Fund';
import ShowAnnouncement from './Components/ShowAnnouncement/ShowAnnouncement';
import Email from './Components/Email/Email';
import Contact from './Components/Contact/Contact';
import CommitteeMember from './Components/CommitteeMember/CommitteeMember';
import Welcome from './Components/Dashboard/Welcome/Welcome';
import UpdateAnnounce from './Components/Dashboard/UpdateAnnounce/UpdateAnnounce';
import OtherAddition from './Components/Dashboard/OtherAddition/OtherAddition';
import OtherAdditionList from './Components/Dashboard/OtherAdditionList/OtherAdditionList';
import Event from './Components/Home/Event/Event';
import Announcement from './Components/Home/Announcement/Announcement';
import ManageCM from './Components/Dashboard/ManageCM/ManageCM';
import AddCM from './Components/Dashboard/AddCM/AddCM';
import ShowCM from './Components/ShowCM/ShowCM';
import ShowCMAdmin from './Components/ShowCMAdmin/ShowCMAdmin';
import UpdateCM from './Components/Dashboard/UpdateCM/UpdateCM';
import OM from './Components/OM/OM';
import ShowOM from './Components/ShowOM/ShowOM';
import AddOM from './Components/Dashboard/AddOM/AddOM';
import ManageOM from './Components/Dashboard/ManageOM/ManageOM';
import UpdateOM from './Components/Dashboard/UpdateOM/UpdateOM';
import AddWS from './Components/Dashboard/AddWS/AddWS';
import WSList from './Components/Dashboard/WSList/WSList';
import Work from './Components/Work/Work';
import ShowWork from './Components/ShowWork/ShowWork';
import CMAnnounce from './Components/Dashboard/CMDashboardPage/CMAnnounce';
import CMEvnt from './Components/Dashboard/CMDashboardPage/CMEvnt';
import CMOm from './Components/Dashboard/CMDashboardPage/CMOm';
import CMCm from './Components/Dashboard/CMDashboardPage/CMCm';
import CMFund from './Components/Dashboard/CMDashboardPage/CMFund';
import CMDtnList from './Components/Dashboard/CMDashboardPage/CMDtnList';
import CMOthrAdtnList from './Components/Dashboard/CMDashboardPage/CMOthrAdtnList';



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
          <PrivateRoute path="/donate">
            <MakeDonation></MakeDonation>
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
          <PrivateRoute path="/otherAddition">
            <OtherAddition></OtherAddition>
          </PrivateRoute>
          <PrivateRoute path="/otherAdditionList">
            <OtherAdditionList></OtherAdditionList>
          </PrivateRoute>
          <Route path="/event">
            <Event></Event>
          </Route>
          <Route path="/announcement">
            <Announcement></Announcement>
          </Route>
          <Route path="/committeeMember">
            <CommitteeMember></CommitteeMember>
          </Route>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addCM">
            <AddCM></AddCM>
          </PrivateRoute>
          <PrivateRoute path="/manageCM">
            <ManageCM></ManageCM>
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
          <Route path="/showCM/:id">
            <ShowCM></ShowCM>
          </Route>
          <Route path="/showCMAdmin/:id">
            <ShowCMAdmin></ShowCMAdmin>
          </Route>
          <PrivateRoute path="/makeDonation">
            <MakeDonation></MakeDonation>
          </PrivateRoute>
          <PrivateRoute path="/updateCM/:id">
            <UpdateCM></UpdateCM>
          </PrivateRoute>
          <PrivateRoute path="/updateEvent/:id">
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
          <PrivateRoute path="/updateAnnouncement/:id">
            <UpdateAnnounce></UpdateAnnounce>
          </PrivateRoute>
          <PrivateRoute path="/donationYouMade">
            <DonationYouMade></DonationYouMade>
          </PrivateRoute>
          <Route path="/showOM/:id">
            <ShowOM></ShowOM>
          </Route>
          <Route path="/showWork/:id">
            <ShowWork></ShowWork>
          </Route>
          <Route path="/OM">
            <OM></OM>
          </Route>
          <Route path="/work">
            <Work></Work>
          </Route>
          <PrivateRoute path="/addOM">
            <AddOM></AddOM>
          </PrivateRoute>
          <PrivateRoute path="/addWS">
            <AddWS></AddWS>
          </PrivateRoute>
          <PrivateRoute path="/workingSpendList">
            <WSList></WSList>
          </PrivateRoute>
          <PrivateRoute path="/manageOM">
            <ManageOM></ManageOM>
          </PrivateRoute>
          <PrivateRoute path="/updateOM/:id">
            <UpdateOM></UpdateOM>
          </PrivateRoute>
          <PrivateRoute path="/CMmanageAnnouncement">
            <CMAnnounce></CMAnnounce>
          </PrivateRoute>
          <PrivateRoute path="/CMmanageEvent">
            <CMEvnt></CMEvnt>
          </PrivateRoute>
          <PrivateRoute path="/CMmanageOM">
            <CMOm></CMOm>
          </PrivateRoute>
          <PrivateRoute path="/CMmanageCM">
            <CMCm></CMCm>
          </PrivateRoute>
          <PrivateRoute path="/CMfund">
            <CMFund></CMFund>
          </PrivateRoute>
          <PrivateRoute path="/CMworkingSpendList">
            <CMDtnList></CMDtnList>
          </PrivateRoute>
          <PrivateRoute path="/CMotherAdditionList">
            <CMOthrAdtnList></CMOthrAdtnList>
          </PrivateRoute>
          <PrivateRoute path="/CMdonationList">
            <CMDtnList></CMDtnList>
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
