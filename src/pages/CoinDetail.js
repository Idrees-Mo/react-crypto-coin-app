import { NavLink, useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../store/coinsApiSlice";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Grid,
  Button,
} from "@mui/material";

function CoinDetail() {
  const { coinId } = useParams();

  // TODO the query is not creating corret URL
  const { data, isLoading, error } = useGetCoinDetailsQuery(coinId);
  console.warn({
    data,
    isLoading,
    error,
  });
  return (
    <div>
      <Button
        color="inherit"
        component={NavLink}
        to="/coins"
        style={{ margin: "12px" }}
      >
        Go Back
      </Button>
      {isLoading ? (
        <>Loading ... </>
      ) : error ? (
        <>Error Happened</>
      ) : (
        <>
          <Card style={{ marginTop: "16px", textAlign: "center" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <CardMedia
                  component="img"
                  alt={data.name}
                  height="200"
                  image={data.image.large}
                  style={{ marginTop: "12px", border: "3px solid rounded" }}
                />
                <Typography
                  variant="h5"
                  component="div"
                  style={{ margin: "12px" }}
                >
                  {data.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Description:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description.en}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Link
                      href={data.links.homepage[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Homepage
                    </Link>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </>
      )}
    </div>
  );
}

export default CoinDetail;
