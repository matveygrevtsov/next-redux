import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "../store/authSlice";

function TestPage() {
  const isLoggedIn = useSelector(selectAuthState);

  return (
    <>
      <h1>TestPage</h1>
      {isLoggedIn ? (
        <span>Вы авторизованы</span>
      ) : (
        <span>Вы неавторизованы</span>
      )}
    </>
  );
}

export default TestPage;
