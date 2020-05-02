const faker = require('faker')

const { makeClient, gql } = require('../core/test.utils')

const REGISTER_NEW_USER_MUTATION = gql`
    mutation registerNewUser($name: String!, $email: String!, $password: String!, $captcha: String!) {
        user: registerNewUser(name: $name, email: $email, password: $password, captcha: $captcha) {
            id
        }
    }
`

test('register new user', async () => {
    const client = await makeClient()
    const name = faker.fake('{{name.suffix}} {{name.firstName}} {{name.lastName}}')
    const password = faker.internet.password()
    const email = faker.internet.exampleEmail()
    const captcha = 'no'
    const { data, errors } = await client.mutate(REGISTER_NEW_USER_MUTATION, { name, password, email, captcha })
    expect(errors).toEqual(undefined)
    expect(data.user.id).toMatch(/^[0-9a-zA-Z-_]+$/)
})
