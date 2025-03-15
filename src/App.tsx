import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Form";
import RootLayout from "./RootLayout";
import Success from "./Success";
let router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Form/>
      },{
        path:'/success',
        element:<Success/>
      }
    ]
  }
])
function App() {
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
