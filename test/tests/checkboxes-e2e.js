import CheckboxesPage from '../../pageobjects/CheckboxesPage'
import CheckboxesSteps from '../../steps/CheckboxesSteps'

describe('E2E Tests', ()=> {

    beforeEach(  ()=> {
        CheckboxesSteps.open_page();
    })
    afterEach( async ()=> {
         browser.executeScript('window.sessionStorage.clear();');
         browser.executeScript('window.localStorage.clear();');
    })

    it('Check that checkbox 2 should be enabled',  () => {
        CheckboxesSteps.verifyFirstCheckboxNotSelected();
        CheckboxesSteps.verifyLastCheckboxSelected();
    })

    it('Check that checkbox 1 should be enabled after clicking on it', () => {
        CheckboxesSteps.verifyFirstCheckboxNotSelected();
        CheckboxesSteps.clickFirstCheckbox();
        CheckboxesSteps.verifyFirstCheckboxSelected();
    })
})
