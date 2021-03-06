const {db, Organization, Project, User} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({force: true})
    const [UNICATS, DogsWOBorders, HabitatForHamsters] = await Promise.all([
      Organization.create({
        name: 'UNICATS',
        description:
          'UNICATS helps stray cats across the globe with the philosophy of neuter and shelter.',
        email: 'questions@unicats.org',
        address: '50-10 Northern Blvd, Queens, NY 11101',
        latitude: 40.75242493074646,
        longitude: -73.91212358862754,
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Finhabitat.com%2Fteam-of-feral-cats-finds-work-at-javits-center-in-exchange-for-food-and-shelter%2F&psig=AOvVaw20r_9bJjFzBpOupL95uiad&ust=1616114473322000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICbj-LNuO8CFQAAAAAdAAAAABAU',
      }),
      Organization.create({
        name: 'Dogs Without Borders',
        description:
          'We are committed to giving aid to dogs everywhere the medical care they need. Every year we send out volunteer vetenarians to provide that care.',
        email: 'questions@dwob.org',
        address: '1073 6th Ave, New York, NY 10018',
        latitude: 40.75431120665098,
        longitude: -73.98498847297773,
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kalw.org%2Fterm%2Fferal-dogs&psig=AOvVaw3Z329hqSRDNa7G1wammlEb&ust=1616114987535000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi639fPuO8CFQAAAAAdAAAAABAQ',
      }),
      Organization.create({
        name: 'Habitat for Hamsters',
        description:
          'Every year tens of hamsters go without shelter. Our organization provides habitats for the hamsters in need.',
        email: 'questions@hforh.org',
        address: '475 Broadway, New York, NY 10013',
        latitude: 40.721604767298,
        longitude: -74.00046667297845,
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arl-iowa.org%2Fpet-help%2Fresources-for-pet-owners%2Fall-about-pets%2Fhamsters%2F&psig=AOvVaw2maN-PWJxy38brdHzxtQ-y&ust=1616115382419000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj_yY3RuO8CFQAAAAAdAAAAABAJ',
      }),
    ])

    const [
      feedCats,
      neuterCats,
      vaccinateDogs,
      houseForHamsters,
    ] = await Promise.all([
      Project.create({
        title: 'Feed the Cats',
        description: 'For buying and distributing nutritious cat food',
        startDate: new Date(),
        endDate: new Date(1616030949982 * 1.01),
        goalAmount: 2000,
        currentAmount: 5,
      }),
      Project.create({
        title: 'Neuter Cats',
        description: 'For equipment for surgeries',
        startDate: new Date(1616030949982 * 0.98),
        endDate: new Date(1616030949982 * 1.002),
        goalAmount: 6423,
        currentAmount: 7,
      }),
      Project.create({
        title: 'Vaccinate Dogs',
        description:
          'We need the funds to buy vaccines and other necessities to administer them',
        startDate: new Date(1616030949982 * 0.94),
        endDate: new Date(1616030949982 * 1.003),
        goalAmount: 8320,
        currentAmount: 15,
      }),
      Project.create({
        title: 'Build Houses for Hamsters',
        description:
          'All the proceeds will be used to pay for wood and other supplies needed to build houses',
        startDate: new Date(1616030949982 * 0.96),
        endDate: new Date(1616030949982 * 1.012),
        goalAmount: 9000,
        currentAmount: 22,
      }),
    ])

    /* eslint-disable no-unused-vars */
    const [sam, frodo, merry, pippin, gandalf] = await Promise.all([
      User.create({
        firstName: 'Sam',
        lastName: 'Gamgee',
        password: 'password',
        email: 'sam@email.com',
        isFlower: true,
        pollen: 12,
      }),
      User.create({
        firstName: 'Frodo',
        lastName: 'Baggins',
        password: 'password',
        email: 'frodo@email.com',
        isFlower: true,
        pollen: 15,
      }),
      User.create({
        firstName: 'Merry',
        lastName: 'Brandybuck',
        password: 'password',
        email: 'merry@email.com',
        isFlower: true,
        pollen: 22,
      }),
      User.create({
        firstName: 'Pippin',
        lastName: 'Took',
        password: 'password',
        email: 'pippin@email.com',
        isFlower: false,
        pollen: 30,
      }),
      User.create({
        firstName: 'Gandalf',
        lastName: 'TheWhite',
        password: 'password',
        email: 'gandalf@email.com',
        isFlower: false,
        pollen: 30,
      }),
    ])

    await UNICATS.addProject(feedCats)
    await UNICATS.addProject(neuterCats)
    await DogsWOBorders.addProject(vaccinateDogs)
    await HabitatForHamsters.addProject(houseForHamsters)

    await sam.setOrganization(UNICATS)
    await frodo.setOrganization(DogsWOBorders)
    await merry.setOrganization(HabitatForHamsters)
  } catch (err) {
    console.error(err)
  }
}

module.exports = seed
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}
