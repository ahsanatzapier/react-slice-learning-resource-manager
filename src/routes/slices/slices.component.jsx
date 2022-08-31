import NoSlices from "../../components/no-slices/no-slices.component";
import { useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { getUserSlicesFromArray } from "../../utils/firebase.utils";
import { SlicesContext } from "../../contexts/slices.context";

const Slices = () => {
  const { currentSlices, setCurrentSlices } = useContext(SlicesContext);
  const { currentUser } = useContext(UserContext);
  console.log("SLICES PAGE", currentUser);

  // useEffect(() => {
  //   const getSlices = async () => {
  //     // if (currentUser) {
  //     console.log("SLICES PAGE", currentUser);
  //     // const slices = await getUserSlicesFromArray(currentUser);
  //     // setCurrentSlices(slices);
  //   };
  //   // };

  //   getSlices();

  //   // console.log("SLICES PAGE", currentSlices);
  // }, []);

  return (
    <div className="hero is-fullheight-with-navbar has-background">
      <img
        className="hero-background is-align-items-stretch is-transparent"
        src="https://img.freepik.com/free-photo/pastel-pink-oil-paint-textured-background_53876-108408.jpg?w=2000&t=st=1661834847~exp=1661835447~hmac=8832ddc3409f0ccae4f35a07b68a47e390bcc7bfc48d6467afeb5acf4887ff79"
      />
      <div className="hero-body  is-align-items-stretch">
        <div className="container  is-flex">
          <div className="columns is-centered  is-flex-grow-1">
            <div className="column">
              <NoSlices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slices;
