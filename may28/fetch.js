let url="https://jsonplaceholder.typicode.com/users"

let api=async()=>{
    let response=await fetch(url)
    let data= await response.json()
    let titles=data.map((value,index)=>{
        return <li key={index}>{value.name}</li>
})
ReactDOM.render(titles,document.getElementById("container"))
}

api();