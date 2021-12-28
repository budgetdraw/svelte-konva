const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const waitTestReady = async () => {
    const window = await cy.window()
    for (let i = 0; i < 100; i++) {
        if (window.testReady) {
            return
        }
        await sleep(100)
    }
    throw new Error('not test ready after twenty iterations')
}

it('should display lines', async () => {
    cy.visit('/lines');
    await waitTestReady()
    cy.compareSnapshot('lines', 0);
});