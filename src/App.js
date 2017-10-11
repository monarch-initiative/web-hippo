import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Input,
  Checkbox,
  Button,
  Icon
} from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} />
          Pubmed Browser
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item simple text="More Information">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container style={{ marginTop: "7em" }}>
      <Header as="h1">Pubmed Browser</Header>
      <p>Search for genes, phenotypes, or disorders.</p>

      <div style={{ marginBottom: 64 }}>
        <Input
          fluid
          size="big"
          loading
          icon="user"
          placeholder="Search..."
          value="Achondroplasia, FGFR3"
        />
      </div>

      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h3">Filters</Header>

            <Header as="h4" style={{ marginTop: 8 }}>
              Genes
            </Header>
            <Segment color="yellow" padded style={{ padding: 16 }}>
              <div>
                <Checkbox label="FGFR3" />
              </div>
              <div>
                <Checkbox label="FGFR2" />
              </div>
              <div>
                <Checkbox label="FGFR1" />
              </div>
            </Segment>
            <Header as="h4">Disorders</Header>
            <Segment color="red" padded style={{ padding: 16 }}>
              <div>
                <Checkbox label="Achondroplasia" />
              </div>
              <div>
                <Checkbox label="Pseudoachondroplasia" />
              </div>
              <div>
                <Checkbox label="SADDAN" />
              </div>
            </Segment>
            <Header as="h4">Phenotype</Header>
            <Segment color="teal" padded style={{ padding: 16 }}>
              <div>
                <Checkbox label="Short Stature" />
              </div>
              <div style={{ marginLeft: 32 }}>
                <Checkbox label="Present" />
              </div>
              <div style={{ marginLeft: 32 }}>
                <Checkbox label="Absent" />
              </div>
              <div>
                <Checkbox label="Rhizomelia" />
              </div>
              <div>
                <Checkbox label="Frontal Bossing" />
              </div>
            </Segment>
            <Header as="h4" style={{ marginTop: 8 }}>
              Publication
            </Header>
            <Segment color="blue" padded style={{ padding: 16 }}>
              <div>
                <Checkbox label="Lancet" />
              </div>
              <div>
                <Checkbox label="NEJM" />
              </div>
              <div>
                <Checkbox label="Nature" />
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Button style={{ float: "right" }} size="small" color="purple">
              <Icon name="lab" />
              Insights
            </Button>

            <Header as="h2">Results (27)</Header>

            <Segment padded style={{ padding: 32 }}>
              <p>Lancet. 2007 Jul 14;370(9582):162-72.</p>
              <h2>Achondroplasia.</h2>
              <p>Horton WA1, Hall JG, Hecht JT.</p>

              <p>
                Achondroplasia is the most common form of short limb dwarfism in
                human beings, affecting more than 250,000 individuals worldwide.
                More than 95% of patients have the same point mutation in the
                gene for fibroblast growth factor receptor 3 (FGFR3) and more
                than 80% of these are new mutations. The mutation, which causes
                gain of FGFR3 function, affects many tissues, most strikingly
                the cartilaginous growth plate in the growing skeleton, leading
                to a variety of manifestations and complications. The biology of
                FGFR3 and the molecular and cellular consequences of the
                achondroplasia mutation are being elucidated, providing a more
                complete understanding of the disorder and a basis for future
                treatments targeted directly at relevant pathogenetic pathways.
                Furthermore, the natural history of the condition, which has
                been well delineated in childhood and adolescence, is being
                defined more fully in adults with achondroplasia; most of the
                serious complications can be modified favourably or prevented by
                anticipation and early treatment. Possible future treatments
                include chemical inhibition of receptor signalling, antibody
                blockade of receptor activation, and alteration of pathways that
                modulate the downstream propagation of FGFR3 signals. PMID:
                17630040 DOI: 10.1016/S0140-6736(07)61090-3
              </p>
            </Segment>
            <Segment padded style={{ padding: 32 }}>
              <p>Lancet. 2007 Jul 14;370(9582):162-72.</p>
              <h2>Achondroplasia.</h2>
              <p>Horton WA1, Hall JG, Hecht JT.</p>

              <p>
                Achondroplasia is the most common form of short limb dwarfism in
                human beings, affecting more than 250,000 individuals worldwide.
                More than 95% of patients have the same point mutation in the
                gene for fibroblast growth factor receptor 3 (FGFR3) and more
                than 80% of these are new mutations. The mutation, which causes
                gain of FGFR3 function, affects many tissues, most strikingly
                the cartilaginous growth plate in the growing skeleton, leading
                to a variety of manifestations and complications. The biology of
                FGFR3 and the molecular and cellular consequences of the
                achondroplasia mutation are being elucidated, providing a more
                complete understanding of the disorder and a basis for future
                treatments targeted directly at relevant pathogenetic pathways.
                Furthermore, the natural history of the condition, which has
                been well delineated in childhood and adolescence, is being
                defined more fully in adults with achondroplasia; most of the
                serious complications can be modified favourably or prevented by
                anticipation and early treatment. Possible future treatments
                include chemical inhibition of receptor signalling, antibody
                blockade of receptor activation, and alteration of pathways that
                modulate the downstream propagation of FGFR3 signals. PMID:
                17630040 DOI: 10.1016/S0140-6736(07)61090-3
              </p>
            </Segment>
            <Segment padded style={{ padding: 32 }}>
              <p>Lancet. 2007 Jul 14;370(9582):162-72.</p>
              <h2>Achondroplasia.</h2>
              <p>Horton WA1, Hall JG, Hecht JT.</p>

              <p>
                Achondroplasia is the most common form of short limb dwarfism in
                human beings, affecting more than 250,000 individuals worldwide.
                More than 95% of patients have the same point mutation in the
                gene for fibroblast growth factor receptor 3 (FGFR3) and more
                than 80% of these are new mutations. The mutation, which causes
                gain of FGFR3 function, affects many tissues, most strikingly
                the cartilaginous growth plate in the growing skeleton, leading
                to a variety of manifestations and complications. The biology of
                FGFR3 and the molecular and cellular consequences of the
                achondroplasia mutation are being elucidated, providing a more
                complete understanding of the disorder and a basis for future
                treatments targeted directly at relevant pathogenetic pathways.
                Furthermore, the natural history of the condition, which has
                been well delineated in childhood and adolescence, is being
                defined more fully in adults with achondroplasia; most of the
                serious complications can be modified favourably or prevented by
                anticipation and early treatment. Possible future treatments
                include chemical inhibition of receptor signalling, antibody
                blockade of receptor activation, and alteration of pathways that
                modulate the downstream propagation of FGFR3 signals. PMID:
                17630040 DOI: 10.1016/S0140-6736(07)61090-3
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 1" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 2" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 3" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Footer Header" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted section />
        <Image centered size="mini" src="/logo.png" />
        <List horizontal inverted divided link>
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
