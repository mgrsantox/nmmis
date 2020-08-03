import React from 'react'
import NavBar from './components/navigation/navbar'
import SideBar from './components/navigation/sidebar'
import Footer from './components/navigation/footer'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import AddMunicipal from './pages/municipal/add-municipal';
import ListMunicipal from './pages/municipal/list-municipal'
import AddWard from './pages/ward/add-ward';


const App = () => {
    return (
        <div>

            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className="content-wrapper">
                <div className="content">
                    <div className="container-fluid">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/municipals" exact component={ListMunicipal} />
                            <Route path="/add-municipal" exact component={AddMunicipal} />
                            <Route path="/add-ward" exact component={AddWard} />
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App