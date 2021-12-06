import React from 'react'
import { BrowserRouter as Router , Link,Route } from 'react-router-dom'
import Header from './Header'
import '../App.css'
import Footer from './Footer'
import RequestCard from './RequestCard'
import Fcategeory from './Fcategeory'

const Faculty = () => {
    return (
        <>
        <div className="app">
        <Header/>
        <h1> Faculty Acceptance </h1>
        <Fcategeory/>
        <RequestCard/>
        <RequestCard/>
        <RequestCard/>
        <RequestCard/>
        <Footer/>
        </div>
        </>
    )
}

export default Faculty
