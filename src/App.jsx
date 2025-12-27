import { BrowserRouter } from "react-router"
import PageRouter from "./features/routes/PageRouter"

function App() {
  return (
    <BrowserRouter>
      <PageRouter />
    </BrowserRouter>
  )
}

export default App
