import React from 'react';
import '../App.css';

class CalCulator_AppliCation extends React.Component{
    constructor(){
        super()
        this.state = {
            inputVal: []
        }
    }

getValue = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue1 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue2 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue3 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue4 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue5 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue6 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue7 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue8 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue9 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue10 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue11 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue12 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue13 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue14 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue15 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }

 Closed = () => {
this.setState({
    inputVal: ""
})
    }

 removeLast = () => {
 this.setState({
   inputVal: this.state.inputVal.slice(0,-1)
 })
    
 }

equalVal = () => {
    this.setState({
        inputVal: eval(this.state.inputVal)
    })
}   

    render(){
        return(
            <div>
                <div>
        <h1 style={{color: 'grey', textAlign: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', textDecoration: 'underline'}}>
          CalCulator App In React_Js
        </h1>
        <br/>
        <br/>

        <div style={{textAlign: 'center',padding:"10px",paddingLeft:"18px",paddingRight:"-50px",backgroundColor:"grey",width:"290px",marginLeft:"480px"}}>
          <input value={this.state.inputVal} type="text" style={{fontSize:"20px",width:"255px",marginLeft:"-10px",height: '40px',backgroundColor:"lightgrey",border:"none",color:"white",fontWeight:"bold"}} onChange={(v) => this.setState({inputVal: v.target.value})} />
          
          <br/>
          <br/>
          <button onClick={() => this.getValue('(')} style={{fontWeight:"900",height: '40px',marginLeft:"-12px", width: '65px',border:"1px solid grey",color: 'grey'}}>(</button>
          <button onClick={() => this.removeLast()} style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",fontWeight:"900",height: '40px', width: '65px',backgroundColor:"red",border:"1px solid red",borderLeft:"0px solid white",color: 'white'}}>DEL</button>
          <button onClick={() => this.getValue2(')')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderLeft:"0px solid white", color: 'grey'}}>)</button>
          <button onClick= {this.Closed} style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",fontWeight:"900",backgroundColor:"red",height: '40px',width: '65px', color: 'white',border:"1px solid red",borderLeft:"0px solid white"}}>AC</button>
          <br/>
          <button onClick={() => this.getValue('7')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",marginLeft:"-12px", color: 'grey'}}>7</button>
          <button onClick={() => this.getValue1('8')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'grey'}}>8</button>
          <button onClick={() => this.getValue2('9')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'grey'}}>9</button>
          <button onClick={() => this.getValue3('/')} style={{fontWeight:"900",backgroundColor:"#0D6EFD",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'white'}}>/</button>
          <br/>
          <button onClick={() => this.getValue4('4')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",marginLeft:"-12px",color: 'grey'}}>4</button>
          <button onClick={() => this.getValue5('5')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'grey'}}>5</button>
          <button onClick={() => this.getValue6('6')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'grey'}}>6</button>
          <button onClick={() => this.getValue7('*')} style={{fontWeight:"900",backgroundColor:"#0D6EFD",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'white'}}>*</button>
          <br/>
          <button onClick={() => this.getValue8('1')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",marginLeft:"-12px",color: 'grey'}}>1</button>
          <button onClick={() => this.getValue9('2')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white",color: 'grey'}}>2</button>
          <button onClick={() => this.getValue10('3')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'grey'}}>3</button>
          <button onClick={() => this.getValue11('-')} style={{fontWeight:"900",backgroundColor:"#0D6EFD",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white", color: 'white'}}>-</button>
          <br/>
          <button onClick={() => this.getValue12('0')} style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",marginLeft:"-12px",color: 'grey'}}>0</button>
          <button onClick={() => this.getValue13('.')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white",color: 'grey'}}>.</button>
          <button onClick={() => this.getValue14('00')} style={{fontWeight:"900",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white",color: 'grey'}}>00</button>
          <button onClick={() => this.getValue15('+')} style={{fontWeight:"900",backgroundColor:"#0D6EFD",height: '40px', width: '65px',border:"1px solid grey",borderTop:"0px solid white",borderLeft:"0px solid white",color: 'white'}}>+</button>
          <br/>
          <button onClick={this.equalVal} style={{fontWeight:"900",height: '40px', width: '262px',marginLeft: "-13px", color: 'white',backgroundColor:"green",border:"none"}}>=</button>
        </div>
      </div>
</div>
    );   
  }
}

export default CalCulator_AppliCation;