// example for functional component

function Header({brand,price}){
    console.log("props of Header",brand,price)
    return <h1> I  AM Header {brand}{price}</h1>
}

function Content(props){
    return <h2>I m Content {props.fName}{props.lName}</h2>
}

function Footer({person:{uId,uName},fName}){
    //console.log("footer props",props);
    return <p> I AM Footer {uId} {uName}{fName}</p>
}

ReactDOM.render(<div>
    <Header brand="Thar" price="1700000" />
    <Content fName="Danush"lName="R"/>
    <Content fName="Jagath"/>
    <Content person={{uId:"TYC1234",uName:"Vijay"}} fName="Dhanu"/>
    <Content />
    <Footer person={{uId:"TYC1234",uName:"Vijay"}} fName="Dhanu" />
</div>,document.getElementById("container"))