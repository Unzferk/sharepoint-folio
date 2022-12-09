import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import { IPerson } from "../models/IPerson";
import { ICustomersProps } from "./ICustomersProps";
import styles from "./Customers.module.scss";

const Customers: React.FC<ICustomersProps> = (props) => {
  const [user, setUser] = useState<IPerson | undefined>(undefined);

  useEffect(() => {
    fetchexternalapi();
  }, []);

  const fetchexternalapi = () => {
    fetch(`https://randomuser.me/api/`)
      .then((response) => response.json())
      .then((resp) => setUser(resp.results[0]))
      .catch((err) => console.log(err));
  };

  return (
    <section className={`${styles.charts}`}>
      <h2 className="title">Our Costumers!</h2>
      <p />
      {user && (
        <Card sx={{ maxWidth: 345, margin: "0 auto", padding: "0.1em" }}>
          <CardMedia
            component="img"
            height="140"
            image={user.picture.large}
            alt="green iguana"
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user ? `${user.name.first} ${user.name.last}` : "None"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user && `${user.email}`}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user && `${user.gender}`}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user && `${user.phone}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => fetchexternalapi()}>
              Next
            </Button>
          </CardActions>
        </Card>
      )}
    </section>
  );
};

export default Customers;
