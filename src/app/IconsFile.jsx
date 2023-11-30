import React from "react";
import { FaBell, FaSettings, FaAddressBook, FaTimes, FaHome, FaCopy, FaNotification } from "react-icons/fa";

function NotificationIcon() {
  return <FaBell />;
}

function SettingsIcon() {
  return <FaSettings />;
}

function ContactIcon() {
  return <FaAddressBook />;
}

function TimesIcon() {
  return <FaTimes />;
}

function HomeIcon() {
  return <FaHome />;
}


function CopyIcon() {
  return <FaCopy />;
}



export { NotificationIcon, SettingsIcon, ContactIcon, CopyIcon, HomeIcon, TimesIcon };
