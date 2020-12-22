import CheckboxesPage from "../pageobjects/CheckboxesPage"
import Page from "../pageobjects/Page";

class CheckboxesSteps extends Page {

    /**
     * Open page with checkboxes
     */
    open_page() {
        browser.maximizeWindow()
        super.open('checkboxes')
    }

    /**
     * Click on the first checkbox
     */
    clickFirstCheckbox() {
        CheckboxesPage.firstCheckbox.click()
    }

    /**
     * Verify first checkbox not selected
     */
    verifyFirstCheckboxNotSelected() {
        expect(CheckboxesPage.firstCheckbox).not.toBeSelected()
    }

    /**
     * Verify last checkbox selected
     */
    verifyLastCheckboxSelected() {
        expect(CheckboxesPage.lastCheckbox).toBeSelected()
    }

    /**
     * Verify first checkboxes selected
     */
    verifyFirstCheckboxSelected() {
        expect(CheckboxesPage.firstCheckbox).toBeSelected()
    }
}

export default new CheckboxesSteps()
