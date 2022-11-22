import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../footer/Footer";
import Logingoogle from "./loginGoogle";
import Logout from "./logoutGoogle";
const MySwal = withReactContent(Swal);

function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    // console.log(currentUser);
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/");
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or password",
        denyButtonColor: "#8E05C2",
      });
    }

    function checkUser() {
      // console.log( allUsers)

      let smth = allUsers.allUsers.filter(
        (user) => 
        user.email == currentUser.email
        && user.password== currentUser.password
        );
        // console.log(user);
        if (smth.length > 0) return true;
      }
    };

  return(
    <div>
        <div className="d-flex justify-content-center p-2" style={{marginBottom:"200px"}}>

<form action="action_page.php" method="post" className="bg-light p-3">
  <div class="">
    <h1>Login</h1>
    <p>Please fill in this form to Login to your account.</p>
  </div>

  <div class="container3 ">
    <label for="uname"><b>Email</b></label>
    <input type="text" id="email" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" id="password" placeholder="Enter Password" name="psw" required/>

    <button type="button"  onClick={handelSubmit}>Login</button>
{/*    
<Logingoogle/>
   <Logout/> */}
  </div>


</form>
</div>
<Footer/>
        </div>
  );
}
export default Login;
