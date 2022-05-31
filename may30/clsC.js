// example for class component

class Header extends React.Component{
    render(){
        return <h1> I M Header {this.props.uname}</h1>
    }
}
class Content extends React.Component{
    render(){
        console.log("props in Content",this.props);
        return <h2> I M Content {this.props.firstName}{this.props.lastName}</h2>
    }
}
class Footer extends React.Component{
    render(){
        return <h1> I M Footer</h1>
    }
}
ReactDOM.render(<div>
    <Header uname="Raju"/>
    <Content firstName="Umashankar" lastName="J"/>
    <Content firstName="Dhanush" lastName="R"/>
    <Content firstName="Teja" lastName="G"/>
<Content />
<Footer />
</div>, document.getElementById("container") )
 