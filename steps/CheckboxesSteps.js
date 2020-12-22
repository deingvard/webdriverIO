import CheckboxesPage from "../pageobjects/CheckboxesPage"
import Page from "../pageobjects/Page";

class CheckboxesSteps extends Page {

    /**
     * define or overwrite page methods
     */
    open_page() {
        browser.maximizeWindow()
        super.open('checkboxes')
    }

    clickFirstCheckbox() {
        CheckboxesPage.firstCheckbox.click()
    }

    verifyFirstCheckboxNotSelected() {
        expect(CheckboxesPage.firstCheckbox).not.toBeSelected()
    }

    verifyLastCheckboxSelected() {
        expect(CheckboxesPage.lastCheckbox).toBeSelected()
    }

    verifyFirstCheckboxSelected() {
        expect(CheckboxesPage.firstCheckbox).toBeSelected()
    }
}

export default new CheckboxesSteps()
