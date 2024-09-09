"use client";
//@ts-ignore
import { transitions, positions, Provider as AlertProvider } from "react-alert";
//@ts-ignore
import AlertTemplate from "react-alert-template-basic";

function Main({ children }: { children: React.ReactNode }) {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {children}
    </AlertProvider>
  );
}


export default Main;