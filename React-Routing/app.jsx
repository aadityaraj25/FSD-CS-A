import {BrowserRouter} from 'react-router-dom'
function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                <Route Path="/" element={<h1>Home Page</h1>} ></Route>
                <Route Path="/login" element={<h1>Login Page</h1>} ></Route>
                <Route Path="*" element={<h1>Error Page</h1>} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App();