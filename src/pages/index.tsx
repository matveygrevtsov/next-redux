import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       // we can set the initial state from here
//       // we are setting to false but you can run your custom logic here
//       await store.dispatch(setAuthState(true));
//       console.log("State on server", store.getState());
//       return {
//         props: {
//           authState: true,
//         },
//       };
//     }
// );

const Home: NextPage = () => {
  const isLoggedIn = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{isLoggedIn ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          isLoggedIn
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {isLoggedIn ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};

export default Home;
