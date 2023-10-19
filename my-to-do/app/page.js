"use client";
import Image from "next/image";
import React from "react";
import MainCard from "./Components/MainCard";
import TaskInput from "./Components/TaskInput"
import 'bootstrap/dist/css/bootstrap.css'
import styles from "./styles.css"

export default function Home() {
  return (
    <div className="container text-center">
        <div className="row">
          <div className="col-8-md">
              <MainCard />
          </div>
        </div>
    </div>
  );
}
