import {Component} from "react"
//import Header from "../Header"
import "./index.css"

class Home extends Component{
    render(){
        return(
            <div className="bg-container">
                
                <div>
                    <h1 className="main-heading">Building and Contracting Services</h1>
                    <p className="quote">"We don’t just build structures; we create spaces where dreams take shape, communities thrive, and legacies endure."</p>
                </div>
            </div>
        )
    }
} 

export default Home