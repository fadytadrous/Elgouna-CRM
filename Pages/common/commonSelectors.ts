export const navBarSelectors = {
    copilotTab: (page) => page.getByRole('tab', { name: 'Copilot' }),
    searchIcon: (page) => page.locator('i[data-icon-name="Search"]')
}