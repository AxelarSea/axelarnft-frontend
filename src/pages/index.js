// import Home01 from "./Home01";
// import Home02 from "./Home02";
// import Home03 from "./Home03";
// import Home04 from "./Home04";
// import Home05 from "./Home05";
// import Home06 from "./Home06";
// import Home08 from "./Home08";
// import Explore01 from "./Explore01";
// import Explore02 from "./Explore02";
// import Explore03 from "./Explore03";
// import ItemDetails02 from "./ItemDetails02";
// import Activity01 from "./Activity01";
// import Activity02 from "./Activity02";
// import Blog from "./Blog";
// import BlogDetails from "./BlogDetails";
// import HelpCenter from "./HelpCenter";
// import EditProfile from "./EditProfile";
// import Ranking from "./Ranking";
// import Login from "./Login";
// import SignUp from "./SignUp";
// import NoResult from "./NoResult";
// import Contact01 from "./Contact01";
// import Contact02 from "./Contact02";
// import LiveAuctions from "./LiveAuctions";
// import Collection from "./Collection";
// import Authors01 from "./Explore-Authors";

import Home from "./Home";
import FAQ from "./FAQ";
import Explore from "./Explore";
import ItemDetails from "./ItemDetails";
import Authorsprofile from "./Authorsprofile";
import WalletConnect from "./WalletConnect";
import CreateItem from "./CreateItem";
import ListItem from "./List-Item";
import Faucet from "./Faucet";
import NFTBridge from "./NFT-Bridge";
import NFTBridge02 from "./NFT-Bridge02";
import Usecase from "./Use-case";

const routes = [
  // { path: '/home-02', component: <Home02 />},
  // { path: '/home-03', component: <Home03 />},
  // { path: '/home-04', component: <Home04 />},
  // { path: '/home-05', component: <Home05 />},
  // { path: '/home-06', component: <Home06 />},
  // { path: '/home-08', component: <Home08 />},
  // { path: '/explore-01', component: <Explore01 />},
  // { path: '/explore-02', component: <Explore02 />},
  // { path: '/explore-03', component: <Explore03 />},
  // { path: '/item-details-02', component: <ItemDetails02 />},
  // { path: '/activity-01', component: <Activity01 />},
  // { path: '/activity-02', component: <Activity02 />},
  // { path: '/blog', component: <Blog />},
  // { path: '/blog-details', component: <BlogDetails />},
  // { path: '/help-center', component: <HelpCenter />},
  // { path: '/edit-profile', component: <EditProfile />},
  // { path: '/ranking', component: <Ranking />},
  // { path: '/login', component: <Login />},
  // { path: '/sign-up', component: <SignUp />},
  // { path: '/no-result', component: <NoResult />},
  { path: '/faq', component: <FAQ />},
  // { path: '/contact-01', component: <Contact01 />},
  // { path: '/contact-02', component: <Contact02 />},
  // { path: '/live-auctions', component: <LiveAuctions />},
  // { path: '/authors-01', component: <Authors01 />},
  // { path: '/Collection', component: <Collection />},
  { path: '/', component: <Home />},
  { path: '/Home', component: <Home />},
  { path: '/Explore', component: <Explore />},
  { path: '/ItemDetails', component: <ItemDetails />},
  { path: '/Authors-Profile', component: <Authorsprofile />},
  { path: '/wallet-connect', component: <WalletConnect />},
  { path: '/faucet', component: <Faucet />},
  { path: '/create-item', component: <CreateItem />},
  { path: '/list-item', component: <ListItem />},
  { path: '/NFT-Bridge', component: <NFTBridge />},
  { path: '/NFT-Bridge02', component: <NFTBridge02 />},
  { path: '/use-case-bridge', component: <Usecase />},
]

export default routes;