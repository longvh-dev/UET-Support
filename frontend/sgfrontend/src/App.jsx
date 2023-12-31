import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Floatbuttons from "./components/Floatbuttons.jsx";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Timetable from "./components/Timetable";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses.jsx";
import Grade from "./components/Grade.jsx";
import Request from "./components/Request";
import Chat from "./components/Chat.jsx";
import News from "./components/News.jsx";
import NewsContent from "./components/NewsContent.jsx";
import Notification from "./components/Notification";
import Profile from "./components/Profile";
import Questions from "./components/Questions.jsx";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NoPage from "./components/NoPage.jsx";

import AdminLogin from "./components/admin/AdminLogin.jsx";
import AdminLogout from "./components/admin/AdminLogout.jsx";
import AdminHome from "./components/admin/AdminHome.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import AdminProfile from "./components/admin/AdminProfile.jsx";
import Students from "./components/admin/Students.jsx";
import Lecturers from "./components/admin/Lecturers.jsx";
import AdminNews from "./components/admin/AdminNews.jsx";
import AdminRequest from "./components/admin/AdminRequest.jsx";
import AdminChat from "./components/admin/AdminChat.jsx";
import AdminCourse from "./components/admin/AdminCourse.jsx";
import AdminGrade from "./components/admin/AdminGrade.jsx";
import AdminNotification from "./components/admin/AdminNotification.jsx";
import "./css/AdminHome.css";
import AllStudentsCourse from "./components/AllStudentsCourse.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken'));
  const [model, setModel] = useState(localStorage.getItem('model'));
  const [id, setId] = useState(localStorage.getItem('id'));
  const [profileHeader, setProfileHeader] = useState(JSON.parse(localStorage.getItem('profileHeader')));

  return (
    <Router>
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader} />
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Home />
                </div>
                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            exact
            path="/"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar/>
                  <Home/>
                </div>
                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/login"
            element={
              <Login setToken={setToken} setModel={setModel} setId={setId} setProfileHeader={setProfileHeader}/>
            }
          />
          <Route
            path="/logout"
            element={
              <Logout setToken={setToken} setModel={setModel} setId={setId} setProfileHeader={setProfileHeader}/>
            }
          />
          <Route
            path="/timetable"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Timetable isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>
                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/courses"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Course isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>

                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/all/courses"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <AllCourses isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>

                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <AllStudentsCourse isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>

                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/grades/:courseId"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Grade isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>
                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/requests"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Request isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>
                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/chat"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Chat
                    isAuthenticated={!!token}
                    model={model}
                    id={id}
                    token={token}
                  />
                </div>

                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/news/:newId"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <NewsContent token={token}/>
                </div>
                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/news"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader} />
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <News isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>
                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/notifications"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader} token={token}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Notification isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>

                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/profile"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader} />
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Profile isAuthenticated={!!token} model={model} id={id} token={token}/>
                </div>

                <Footer />
              </div><Floatbuttons/></>
            }
          />
          <Route
            path="/questions"
            element={
              <><div className="App">
                <Header model={model} id={id} profileHeader={profileHeader}/>
                <div className="SideMenuAndPageContent">
                  <Navbar model={model} />
                  <Questions />
                </div>

                <Footer />
              </div><Floatbuttons/></>
            }
          />
        <Route path="*" element={<NoPage />} />


        {/* For admins */}
        <Route
          path="/admin"
          element={
            <AdminHome
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/home"
          element={
            <AdminHome
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/login"
          element={<AdminLogin setAdminToken={setAdminToken} />}
        />
        <Route
          path="/admin/logout"
          element={<AdminLogout setAdminToken={setAdminToken} />}
        />
        <Route
          path="/admin/dashboard"
          element={
            <Dashboard
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/students"
          element={
            <Students
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/lecturers"
          element={
            <Lecturers
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/courses"
          element={
            <AdminCourse
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/news"
          element={
            <AdminNews
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/requests"
          element={
            <AdminRequest
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/notifications"
          element={
            <AdminNotification
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/chat"
          element={
            <AdminChat
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/grades"
          element={
            <AdminGrade
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
        <Route
          path="/admin/profile"
          element={
            <AdminProfile
              isAuthenticated={!!adminToken}
              adminToken={adminToken}
              className="SideMenuAndPageContent PageContent"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
