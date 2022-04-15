import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
      <Container maxWidth="lg">
        <Typography align="center" variant="h2" paragraph mt={10} mb={10}>
          Welcome to Teams-2-Teams!
        </Typography>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Paper component="section">
              <Typography variant="h4" paragraph>
                Topic #1
              </Typography>
              <Typography paragraph height={150}>
                Adipisicing magna voluptate nisi fugiat adipisicing pariatur
                deserunt aute laborum culpa. Anim eu consectetur enim laboris
                esse sit in. Ad pariatur consequat id mollit. Duis consectetur
                in nisi minim deserunt ipsum laboris.
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper component="section">
              <Typography variant="h4" paragraph>
                Topic #2
              </Typography>
              <Typography paragraph height={150}>
                Cupidatat anim reprehenderit pariatur exercitation fugiat ea.
                Nostrud amet laboris sint irure. Anim magna labore ipsum sit
                mollit commodo nulla nulla dolor. Dolore exercitation nisi
                nostrud culpa adipisicing veniam nulla veniam fugiat Lorem.
                Proident sit cupidatat cillum consequat deserunt eu officia
                exercitation sit. Culpa commodo nulla dolore nisi voluptate
                nulla veniam minim et eiusmod.
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper component="section">
              <Typography variant="h4" paragraph>
                Topic #3
              </Typography>
              <Typography paragraph height={150}>
                Mollit aliquip ex reprehenderit veniam qui culpa commodo nostrud
                et proident non. Pariatur amet anim id est aliquip tempor quis
                anim Lorem occaecat sint. Voluptate aliqua tempor et excepteur
                id exercitation exercitation do. Sint enim ad commodo laborum ad
                occaecat aute occaecat ex minim nisi fugiat amet. Deserunt
                ullamco dolor incididunt amet aliqua eiusmod culpa in.
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper>
              <Typography variant="h4" paragraph>
                Topic #4
              </Typography>
              <Typography paragraph height={150}>
                Ullamco excepteur eiusmod anim occaecat aliquip consequat
                veniam. Sint ex id nisi id dolore enim id sit nisi in et laborum
                dolor. Anim cillum consequat eiusmod officia magna veniam nulla
                occaecat id velit labore exercitation sint aliquip. Sit occaecat
                amet magna tempor esse eu officia deserunt.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
  );
}
