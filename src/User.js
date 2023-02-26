// // import React from "react"

// // class User extends React.Component{
  
// //   constructor(props){
// //     super(props) 
// //     this.state = {
// //       count : 0
// //     }

// //     console.log(this.state)
// //   }

// //   render(){
// //     let count = 0

// //     const increment = () => {
// //       this.setState({count: this.state.count + 1})
// //       console.log(this.state.count)
// //     }

// //     return(
// //       <div style={{flex: '1'}}>
// //         <h1>{this.props.title} Component</h1>
// //         <h2>Count: {this.state.count}</h2>
// //         <button onClick={increment}>+</button>
// //       </div>
// //     )
// //   }
// // }
// // export default User

// import React from "react"
// class User extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0,
//       name: 'Jack',
//       language: 'eng',
//       true: false,
//     }
//   }

//   render(){
//     const inc = ()=>{
//       this.setState({count: this.state.count + 1})
//       console.log(this.state.count);
//     }
//     const dec = ()=>{
//       this.setState({count: this.state.count - 1})
//       console.log(this.state.count);
//     }
//     const then = ()=>{
//       this.setState({count: this.state.count  + 10})
//     }

//     const onNameChange = (e) =>{
//       this.setState({name: e.target.value})
//     }

//     const onSelectChange = (e)=>{
//       this.setState({language: e.target.value})
//     }

//     const chack = (e) =>{
//       this.setState({true: e.target.value})
//     }

//     return(
//       <div>
//         <div>components</div>
//         <h1>Count: {this.state.count} {this.state.name} {this.state.language}</h1>
//         <button onClick={inc}>+</button>
//         <button onClick={dec}>-</button>
//         <button onClick={then}>10</button>
//         <input type='text' onChange={onNameChange} placeholder='name change'></input>

//         <select onChange={onSelectChange}>
//           <option value='eng'>English</option>
//           <option value='ru'>Russia</option>
//           <option value='uzb'>Uzbek</option>
//         </select>
//         <input type="checkbox" onChange={chack}></input>
//       </div>
//     )
//   }
// }

// export default User
