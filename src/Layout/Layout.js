import React from 'react'
import classes from './Layout.Module.css'
import {MenuToggle} from '../Components/UI/Navigation/MenuToggle/MenuToggle'
import Drawer from '../Components/UI/Navigation/Drawer/Drawer'

class Layout extends React.Component {

    state = {
        menu: false
    }

    openHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render(){
        return(
            <div className={classes.Layout}>
              <Drawer
              isOpen={this.state.menu}
              onClose={this.menuCloseHandler}
              />
                <MenuToggle
                    onToggle={this.openHandler}
                    isOpen={this.state.menu}
                />
                <main>

                    {this.props.children}
                </main>
            </div>
        )
    }
}


export default Layout