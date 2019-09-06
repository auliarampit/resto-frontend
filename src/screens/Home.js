import React, { Component } from 'react'
import {connect} from 'react-redux'

import Cart from '../components/cart'
import {getMenu} from '../publics/actions/menu'
import './style/home.css'



function text (text) {
    if (text.length > 20) {
        let textSplit = text.substr(0, 20)
        return `${textSplit}...`
    } else {
        let textSplit = text
        return `${textSplit}`
    }
}


class Home extends Component {
    state = {
        menu: []
    }
    componentDidMount = async() =>{
        await this.props.dispatch(getMenu())
        .then(()=>{
            this.setState({
              menu : this.props.menu.menu
            })
          })
    }

    show = async() => {
        await this.props.showModal()
    }
    
    render() {
        console.log(this.props.menu)
        return (
            <div>
                <div className='header'>
                    <img className='imgMenu' src= {require('../assets/images/menu.png')} />
                    <p className='foodItem'>Food Items</p>
                    <img className='imgCari' src= {require('../assets/images/magnifying-glass.png')} />
                </div>
                <div className='cart'>
                    <p className='textCart'>Cart</p>
                    <p className='nol'>0</p>
                </div>
                    <img className='fork' src = {require('../assets/images/fork.png')} />
                    <img className='clipboard' src = {require('../assets/images/clipboard.png')} />
                    <img onClick= {this.props.show} className='add' src = {require('../assets/images/add.png')} />

                <div className='container'>
                        {
                            this.state.menu.map(item => {
                                return (
                                    <div className='subContainer'>
                                        <img className='imgCard' src = {item.image}/>
                                        <p className='name'> {text(item.name)} </p>
                                        <p className='harga'> {item.harga} </p>
                                    </div>
                                )
                            })
                        }
                    
                </div>
                {/* <img style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    left: '80%',
                    top: '150px'
                }} src = {require('../assets/images/food.png')} />
                <p style={{
                     position: 'absolute',
                     width: '200px',
                     height: '200px',
                     left: '81.5%',
                     top: '290px',
                     fontSize: '20px',
                     fontWeight: '700'
                }}>Your cart is empty</p> */}
                <Cart />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Home)