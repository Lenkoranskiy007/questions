import React from 'react'
import classes from './Drawer.module.css'
import BackDrop from '../../../UI/Backdrop/Backdrop'
import {NavLink} from "react-router-dom";


const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: true},
    {to: '/quiz-creator', label: 'Создать тест', exact: true}
]
class Drawer extends React.Component {

    renderLinks  () {
      return  links.map((links, index) => {
            return(
                <li key={index}>
                   <NavLink
                   to={links.to}
                   exact={links.exact}
                   activeClassname={classes.active}
                   onClick={this.props.onClose}
                   >
                       {links.label}
                   </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]
        if(!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen? <BackDrop onClose={this.props.onClose}/>: null }
            </React.Fragment>

        )
    }

}

export default Drawer
