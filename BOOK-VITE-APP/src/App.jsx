import React from 'react'
import Book from './component/Book'
import './App.css'
import Header from './component/Header'
const App = () => {
  const data = [
    {image: "https://imgs.search.brave.com/br6T4JBa6SYRgowHDWy1OAz1noHdmKgmg5ZUhxDHkHw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NhL2Y4/LzRhL2NhZjg0YTUw/ZDVjODViN2NhM2Iz/MzQyZjc1NjNhZmQy/LmpwZw",title:"Physics",price: 765},
    {image: "https://imgs.search.brave.com/SdfInLRAyxZfG_0HBoluW-VN76bxyQD7kMVJrAlYb1Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYm9va3NlbnNl/LmNvbS9pbWFnZXMv/MzI3LzA1Ni85Nzgw/NzQ0MDU2MzI3Lmpw/Zw",title:"Chemistry",price: 895},
    {image: "https://imgs.search.brave.com/jDMJbo8rNJpdDYmorSF21-UnI84faT5W5MguWUgIb2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UwLzg4/L2U1L2UwODhlNTkw/ODUzZjljNmI0NzNi/YjFjM2E0NTkwNDA0/LmpwZw",title:"Math",price: 799}
  ]
  return (
    <div>
      <Header></Header>
      <div className='app'>
      {
        data.map((b,i)=>(
          <Book key={i} book={b}/>
        ))
      }
    </div>
    </div>
  )
}

export default App
