import React from "react"

class Years extends React.Component{
  constructor(){
    super()
      this.state = {
        years: null,
        yosh: null,
      }
    
  }
  render(){

    const years = (e)=>{
      this.setState({years: e.target.value})
    }

    const yosh = ()=>{
      this.setState({yosh: 2023 - this.state.years})
    }

    return(
      <>
        <input onChange={years} placeholder="Yilingizni kiriting kiriting" autoFocus></input>
        <div>years: {this.state.years}</div>
        <button onClick={yosh}>button</button>
        <div>yosh: {this.state.yosh}</div>
      </>
    )
  }
}

export default Years