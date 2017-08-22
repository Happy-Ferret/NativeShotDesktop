import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import store from './subflow'

import Header from './Header'
import Pages from './Pages'

import './theme-default.css'
import './index.css'

class Dashboard extends PureComponent<void, void, void> {
    render() {
        const arr = [<span>1</span>, <span>2</span>, <span>3</span>];
        return (
            <Provider store={store}>
                <HashRouter>
                    <div className="App">
                        <Header />
                        <Pages />
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

export default Dashboard