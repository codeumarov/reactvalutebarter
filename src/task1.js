

// 1$ ==  15.000 so'm

import React from "react"

class ValutaAyirBosh extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dollor: null,
      kurs: null,
    }

    this.inc = this.inc.bind(this);
    this.qiymat = this.qiymat.bind(this);
  }

  qiymat(e) {
    this.setState({ dollor: e.target.value });
  }

  inc() {
    this.setState({ kurs: this.state.dollor * 15000 });
  }

  render() {

    return (
      <>
        <div>
          <input type="number" onChange={this.qiymat} placeholder="$ dollor" autoFocus></input>
          <div> Dollor valuta: {this.state.dollor}$  </div>
          <button onClick={this.inc}>Valuta</button>
          <div>S'om: {this.state.kurs} </div>
        </div>
      </>
    )
  }
}

export default ValutaAyirBosh