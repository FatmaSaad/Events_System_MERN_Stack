import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SpeakersList, SpeakersInsert, SpeakersUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/speakers/list" exact component={SpeakersList} />
                <Route path="/speakers/create" exact component={SpeakersInsert} />
                <Route
                    path="/speakers/update/:id"
                    exact
                    component={SpeakersUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App