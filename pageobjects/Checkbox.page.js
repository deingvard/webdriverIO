import Page from './Page'

class CheckboxPage extends Page {
    /**
     * define elements
     */
    get lastCheckbox () {
        return $('#checkboxes input:last-Child')
    }
    get firstCheckbox () {
        return $('#checkboxes input:first-Child')
    }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('checkboxes')
    }

    clickFirstCheckbox(){
        return this.firstCheckbox.click()
    }

    verifyFirstCheckboxNotSelected(){
        expect(this.firstCheckbox).not.toBeSelected()
    }

    verifyLastCheckboxSelected(){
        expect(this.lastCheckbox).toBeSelected()
    }

    verifyFirstCheckboxSelected(){
        expect(this.firstCheckbox).toBeSelected()
    }

}

export default new CheckboxPage()
