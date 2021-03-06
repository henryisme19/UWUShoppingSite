import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Authentication
import { ProtectedRoute } from './authentication/protectedRoute';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import MyOrderScreen from './screens/MyOrderScreen';
import RegisterScreen from './screens/RegisterScreen';
import MyShopScreen from './screens/MyShopScreen';
import EditMyShopScreen from './screens/EditMyShopScreen';
import CreateMyShopScreen from './screens/CreateMyShopScreen';
import MyShopEditProductScreen from './screens/MyShopEditProductScreen';
import MyShopAddProductScreen from './screens/MyShopAddProductScreen';
import MyShopOrdersScreen from './screens/MyShopOrdersScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import StreamingSellerScreen from './screens/StreamingSellerScreen';
import StreamingBuyerScreen from './screens/StreamingBuyerScreen';
import CheckOutScreen from './screens/CheckOutScreen';
import Membership from './screens/Membership';

// Components
import Navbar from './components/Navbar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';


function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>

      <Navbar click={()=>setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>

      <main>
        <Switch>
          {/* Pages */}
          <Route exact path="/login" component={LoginScreen} ></Route>
          <Route exact path="/register" component={RegisterScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/streamingbuyer/:streamingId" component={StreamingBuyerScreen}></Route>
          
          
          {/* Pages that require login */}
          <ProtectedRoute exact path="/myorder" component={MyOrderScreen} />
          <ProtectedRoute exact path="/myshop" component={MyShopScreen} />
          <ProtectedRoute exact path="/myshop/createmyshop" component={CreateMyShopScreen} />
          <ProtectedRoute exact path="/myshop/editmyshop" component={EditMyShopScreen} />
          <ProtectedRoute exact path="/myshop/addproduct" component={MyShopAddProductScreen} />
          <ProtectedRoute exact path="/myshop/editproduct/:id" component={MyShopEditProductScreen} />
          <ProtectedRoute exact path="/myshop/orders" component={MyShopOrdersScreen} />
          <ProtectedRoute exact path="/myprofile" component={MyProfileScreen} />
          <ProtectedRoute exact path="/streamingseller" component={StreamingSellerScreen}></ProtectedRoute>
          <ProtectedRoute exact path="/checkout" component={CheckOutScreen}></ProtectedRoute>

          <Route exact path="/membership" component={Membership} /> 
          
          {/* <ProtectedRoute exact path="/" component={HomeScreen} /> */}

          {/* If page not found */}
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </main>

    </Router>
  );
}

export default App;
