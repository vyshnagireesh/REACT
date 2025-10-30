import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount(){  //life cycle method,which is automatically called when the component is mount
        console.log("Component mounted!");
        


    }
  render() {

    return <p>Component has been mounted!</p>
  }
}
