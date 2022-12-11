import * as React from "react";
import styles from "./Owners.module.scss";
import { IOwnersProps } from "./IOwnersProps";
import CardProfile from "./CardProfile";

const Owners: React.FC<IOwnersProps> = () => {
  const [owners, setOwners] = React.useState([]);

  React.useEffect(() => {
    fetchOwners();
  }, []);

  const fetchOwners = (): void => {
    fetch(`https://randomuser.me/api/?results=6`)
      .then((resp) => resp.json())
      .then((res) => {
        console.log(JSON.stringify(res));
        setOwners(res.results);
      });
  };

  return (
    <section className={`${styles.owners}`}>
      {owners
        ? owners.map((o) => (
            <CardProfile
              name={o.name.first}
              email={o.email}
              image={o.picture.large}
            ></CardProfile>
          ))
        : "no data"}
    </section>
  );
};

export default Owners;
