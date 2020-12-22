import CheckboxPage from '../../pageobjects/Checkbox.page'

describe('checkboxes', function () {
    it('checkbox 2 should be enabled', function () {
        CheckboxPage.open()
        CheckboxPage.verifyFirstCheckboxNotSelected()
        CheckboxPage.verifyLastCheckboxSelected()
    })

    it('checkbox 1 should be enabled after clicking on it', function () {
        CheckboxPage.open()
        CheckboxPage.verifyFirstCheckboxNotSelected()
        CheckboxPage.clickFirstCheckbox()
        CheckboxPage.verifyFirstCheckboxSelected()
        browser.pause(3000);
    })
})
