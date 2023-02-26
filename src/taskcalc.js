

// import React from "react";

// class Calc extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       firstNumber: null,
//       secondNumber: null,
//       ishora: '+',
//       btnvalue: null,
//       del: null,
//     }
//   }

//   render() {

//     const first = (e) => {
//       this.setState({ firstNumber: e.target.value })
//       console.log(e.target.name);
//     }

//     const second = (e) => {
//       this.setState({ secondNumber: e.target.value })
//     }

//     const opsion = (e) => {
//       this.setState({ ishora: e.target.value })
//     }
  
//     const dele =(e)=>{
//       this.setState({firstNumber: ' ', secondNumber: ' ', ishora: '+', btnvalue: ' '})
//     }



//     const btn = () => {
//       if (this.state.ishora == '+') {
//         this.setState({ btnvalue: Number(this.state.firstNumber) + Number(this.state.secondNumber) })
//       }
//       if (this.state.ishora == '-') {
//         this.setState({ btnvalue: Number(this.state.firstNumber) - Number(this.state.secondNumber) })
//       }
//       if (this.state.ishora == '*') {
//         this.setState({ btnvalue: Number(this.state.firstNumber) * Number(this.state.secondNumber) })
//       }
//       if (this.state.ishora == '/') {
//         this.setState({ btnvalue: Number(this.state.firstNumber) / Number(this.state.secondNumber) })
//         }
//       }



//       return (
//         <>
//           <input onChange={first} type='number'  name='n1' value={this.state.firstNumber} placeholder='Input Number'></input>
//           <select onChange={opsion} value={this.state.ishora}>
//             <option value='+'>+</option>
//             <option value='-'>-</option>
//             <option value='*'>*</option>
//             <option value='/'>/</option>
//           </select>
//           <input onChange={second} type='number' value={this.state.secondNumber} placeholder='Input number'></input>
//           <button onClick={btn}>=</button>
//           <button onClick={dele}>c</button>
//           <div>Natija: {this.state.btnvalue}</div>
//         </>
//       )
//     }
//   }
// export default Calc