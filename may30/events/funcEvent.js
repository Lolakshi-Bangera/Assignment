function Welcome(props){
    let getName=()=>{
        console.log("getName executed");
    }
    let getData=(data)=>{
        console.log("get data exeuted",data);
    }
    return(
        <div>
            <h1>Hello,{props.fName}</h1>
            {/* <button onClick={getName}>get Name</button> */}
            {/* OR below one */}
            <button onClick={()=>{getName()}}>get Name</button>
            <button onClick={()=>{getData("google")}}>get Data</button>
        </div>
    )
}
ReactDOM.render(<Welcome fName="Ajay"/>,document.getElementById("container"))