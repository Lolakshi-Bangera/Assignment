class Welcome extends React.Component{
    constructor(props){
        super(props)
        console.log("props",this.props);
        this.getAge=this.getAge.bind(this)
    }

render(){
    return<div>
        <h1> Welcome to React,{this.props.fName}</h1>
        <button onClick={this.getName.bind(this)} >Get Name</button>
        <button onClick={this.getAge} >Get Age</button>

         {/* best way to call a function  */}
        <button onClick={()=>{this.getPlace()}} >Get place</button>
        <button onClick={()=>{this.getData("GOOGLE")}} >Get Data</button>

    </div>
}

getName(){
    console.log("Get Name executed");
}
getAge(){
    console.log("getAge is executed");
}
getPlace(){
    console.log("getPlace is Goa executed ");
}   
getData(data){
    console.log("getData is executed", data);
}
}

ReactDOM.render(<Welcome fName="Raju"/>,document.getElementById("container"))