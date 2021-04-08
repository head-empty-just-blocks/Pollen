# Pollen

In the past year, social media has shown how much mutual aid and crowdfunding
can help organizations and individuals bloom. One of the biggest blockers to
contributing to these campaigns is a lack of transparency or goal fulfillment
after the transaction has occured. Pollen aims to provide this transparency by
implementing blockchain technology to verify how organizations spend what they're given,
as well as organize worthy campaigns into a map of New York City, in order to
make donating easier, trustworthy, and organized. Bees (donors) can donate their
Pollen to Flowers (organizations and individuals fundraising for particular goals)
to make New York's garden bloom brighter.

The Beyond Blockchain hackathon called for participants to build an EOSIO-based application that has the potential to bring a significant positive change at scale to communities around the world, employing the power of EOSIO blockchain if deployed to a scalable GCP infrastructure. As New Yorkers, we decided to
focus the map on our community, but if the app were to be implemented in the real world, we hope that gardens will
bloom in communities all around the world.

## Follow this link to our app!

## Demo

👉 Watch it <a href="">here</a>.
<br>

## Installation

OS X & Linux:

```sh
`npm install`
`createdb pollen`
`npm run seed`
`npm run start-dev`
Find the game at http://localhost:3000.
```

Windows:

```sh
`npm install`
`createdb pollen`
`npm run seed`
`npm run build-client`, then `npm run start`
Find the game at http://localhost:3000.

```

## Usage example

Our project creates a community-based way to spread funds to much-needed
organizations and projects. It integrates the security and decentralization
of the blockchain to show more transparency in investing in mutual aid. As
mutual aid becomes more common and integral through online networks, we hope
apps such as this will allow people to invest more and more in socially beneficial
wealth redistribution.

## Tech/framework used

<b>Built with</b>

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-Map-GL](https://visgl.github.io/react-map-gl//)
- [Google Oauth](https://developers.google.com/identity/protocols/oauth2)
- [Material-UI](https://material-ui.com/)
- [Eos.js](https://eos.io/for-developers/build/eosjs/)
- HTML 5
- CSS

<b>Server</b>

- [Express](https://expressjs.com/)

<b>Deployment</b>

- [Docker](https://www.docker.com/)
- [Google Cloud Platform](https://cloud.google.com/)

<b>Database</b>

- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)

## Features

Our project uses React-Map-GL to render all Flowers in your Garden on a map,
with Redux for state management, Postgres to store important data on users and organizations,
and the Eos.io smart contract for implementing the blockchain that authorizes transactions between
Bees and Flowers.

## Contributing

1. Fork it
2. Clone - git clone (<https://github.com/head-empty-just-blocks/Pollen.git>)
3. Create your feature branch (`git checkout -b feature/sparkles`)
4. Commit your changes (`git commit -am 'feat(three.js): added sparkles'`)
5. Push to the branch (`git push origin feature/sparkles`)
6. Create a new Pull Request

## Credits

[Allyson Camitta](https://github.com/camitta)

[Annie Cho](https://github.com/skai233)

[Anahit Gulian](https://github.com/sathytrench)

## License

We will be adding a license as soon as the Eos.io Hackathon is over! For now,
please don't use our code!
