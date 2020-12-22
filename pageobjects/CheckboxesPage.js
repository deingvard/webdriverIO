
class CheckboxesPage{
    /**
     * define elements
     */
    get lastCheckbox () {
        return $('#checkboxes input:last-Child')
    }
    get firstCheckbox () {
        return $('#checkboxes input:first-Child')
    }

}

export default new CheckboxesPage()
