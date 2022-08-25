import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { changeModalState } from "../../redux/slice/modalSlice";
import { Button } from "@mui/material";
import CustomModal from "../../components/Utils/CustomModal/CustomModal";
import DashboardListItem from "./DashboardListItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import DashboardUsers from "./DashboardUsers";
import DashboardProducts from "./DashboardProducts";

const drawerWidth = 140;

function AdminDashboard() {
  const { userEmail } = useSelector((state: any) => state.loggedIn);
  const [state, setState] = React.useState<string>("products");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (userEmail !== "admin@admin") {
      navigate("/");
      const notify = () =>
        toast.error("شما دسترسی به این بخش ندارید", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      notify();
    }
    // eslint-disable-next-line
  }, [userEmail]);
  return (
    <>
      <CustomModal />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row-reverse", width: "100%" }}>
            <Typography variant="h6" noWrap component="div" sx={{ textAlign: "right" }}>
              داشبورد
            </Typography>
            <Button sx={{ fontSize: "1rem" }} onClick={() => dispatch(changeModalState("از حساب کاربری خارج میشوید؟"))} color="error" variant="contained">
              خروج
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Toolbar />
          {state === "users" && <DashboardUsers />}
          {state === "products" && <DashboardProducts />}
        </Box>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem dir="rtl" disablePadding sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Box onClick={() => setState("users")}>
                <DashboardListItem icon={<AccountCircleIcon />} text="کاربران" />
              </Box>
              <Box onClick={() => setState("products")}>
                <DashboardListItem icon={<LocalMallIcon />} text="محصولات" />
              </Box>
              <Box onClick={() => setState("orders")}>
                <DashboardListItem icon={<LocalAtmIcon />} text="سفارشات" />
              </Box>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}

export default AdminDashboard;
