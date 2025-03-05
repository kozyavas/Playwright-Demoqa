import { Locator, Page, expect,} from '@playwright/test';
import { HelperBase } from "../helperBase";
import { Homepage } from "./Homepage";

export class WidgetsPage extends HelperBase {
  homepage: Homepage;

  widgetsLink: Locator;
  accordianLink: Locator;
  autoCompleteLink: Locator;
  multipleColorWindow: Locator;
  singleColorWindow: Locator;
  closeColors: Locator;

  datepickerLink: Locator;
  selectDateBox: Locator;
  selectDateMonthSelectDropdown: Locator;
  selectDateYearSelectDropdown: Locator;
  selectDateDaySelect: Locator;
  dateTimeBox: Locator;
  dateTimemonthSelectMenu: Locator;
  dateTimemonthSelectOption: Locator;
  dateTimeYearSelectMenu: Locator;
  dateTimeYearSelectMenuOption: Locator;
  dateTimeDaySelect: Locator;
  dateTimeTimeSelect: Locator;

  sliderLink: Locator;
  slider: Locator;
  sliderValue: Locator;

  progressbarLink: Locator;
  progressBar: Locator;
  startButton: Locator;
  resetButton: Locator;

  toolTipsLink: Locator;
  toolTipsButton: Locator;
  toolTipsBox: Locator;
  toolTipsText: Locator;
  toolTipsNumber: Locator;

  menuLink: Locator;
  mainItem2: Locator;
  subItem1: Locator;
  subItem2: Locator;
  subSubList: Locator;
  subSubItem1: Locator;
  subSubItem2: Locator;


  constructor(page: Page) {
    super(page);
      this.homepage = new Homepage(page);      
    
    this.widgetsLink = page.getByText("Widgets");
    this.accordianLink = page.getByText("Accordian");
    this.autoCompleteLink = page.getByText("Auto Complete").first();
    this.multipleColorWindow = page.locator(".auto-complete__input");
    this.singleColorWindow = page.locator("#autoCompleteSingleContainer");
    this.closeColors = page.locator(".css-19bqh2r");

    this.datepickerLink = page.getByText("Date Picker");
    this.selectDateBox = page.locator("#datePickerMonthYearInput");
    this.selectDateMonthSelectDropdown = page.locator(".react-datepicker__month-select");
    this.selectDateYearSelectDropdown = page.locator(".react-datepicker__year-select");
    this.selectDateDaySelect = page.locator(".react-datepicker__day.react-datepicker__day--027");
    this.dateTimeBox = page.locator("#dateAndTimePickerInput");
    this.dateTimemonthSelectMenu = page.locator(".react-datepicker__month-read-view");
    this.dateTimemonthSelectOption = page.locator("div.react-datepicker__month-option", {hasText: 'January'});
    this.dateTimeYearSelectMenu = page.locator(".react-datepicker__year-read-view");
    this.dateTimeYearSelectMenuOption = page.locator(".react-datepicker__year-option", {hasText: '2029'});
    this.dateTimeDaySelect = page.locator(".react-datepicker__day.react-datepicker__day--027");
    this.dateTimeTimeSelect = page.locator(".react-datepicker__time-list-item").nth(40);

    this.sliderLink = page.getByText("Slider");
    this.slider = page.locator("input[type='range']");
    this.sliderValue = page.locator("#sliderValue[value='50']");

    this.progressbarLink = page.getByText("Progress Bar");
    this.progressBar = page.locator(".progress-bar.bg-success");
    this.startButton = page.locator("#startStopButton");
    this.resetButton = page.locator("#resetButton");

    this.toolTipsLink = page.getByText("Tool Tips");
    this.toolTipsButton = page.locator("#toolTipButton");
    this.toolTipsBox = page.locator("#toolTipTextField");
    this.toolTipsText = page.locator("a", { hasText: 'Contrary' });
    this.toolTipsNumber = page.locator("a", { hasText: '1.10.32' });

    this.menuLink = page.getByText("Menu");
    this.mainItem2 = page.locator("li", { hasText: 'Main Item 2' });
    this.subItem1 = page.locator("li", { hasText: 'Sub Item 1' }).first();  
    this.subItem2 = page.locator("li", { hasText: 'Sub Item 2' }).first();
    this.subSubList = page.locator("ul", { hasText: "SUB SUB LIST »" }).last();  
    this.subSubItem1 = page.locator("li", { hasText: 'Sub Sub Item 1' }).first();
    this.subSubItem2 = page.locator("li", { hasText: 'Sub Sub Item 2' }).first();


}

    async autoCompleteFunctionality() {
      await this.homepage.widgetsLinkClick();
      await this.autoCompleteLink.click();
      await this.multipleColorWindow.first().click();
    //dolduracagimiz container bir input olmadigi icin .fill yerine .press ile dolduruyoruz
      await this.multipleColorWindow.first().press("r");
      await this.multipleColorWindow.first().press("e");
      await this.multipleColorWindow.first().press("d");
      await this.multipleColorWindow.first().press('Enter');
      await this.multipleColorWindow.first().press("b");
      await this.multipleColorWindow.first().press("l");
      await this.multipleColorWindow.first().press("u");
      await this.multipleColorWindow.first().press("e");
      await this.multipleColorWindow.first().press("Enter");
        
      //close all the colors by clicking on the close button. instead of for loop, we can use while loop to close all the colors because the number of colors is not fixed.
        while ((await this.closeColors.count()) > 0) {
          await this.closeColors.first().click();
        }
      expect(this.closeColors).not.toBeVisible();
      
      await this.singleColorWindow.click();
      await this.singleColorWindow.press("r");
      await this.singleColorWindow.press("e");
      await this.singleColorWindow.press("d");
      await this.singleColorWindow.press('Enter');
  }
  
  async datePickerFunctionality() {
    await this.homepage.widgetsLinkClick();
    await this.datepickerLink.click();//
    await this.selectDateBox.click();
    await this.selectDateMonthSelectDropdown.selectOption({ index: 1 });//.selectOption() selects the option from the dropdown based on the index.
    await this.selectDateYearSelectDropdown.selectOption({ index: 127 });// 127 is the index of the year 2029 in the dropdown.
    await this.selectDateDaySelect.click();

    await this.dateTimeBox.click();
    await this.dateTimemonthSelectMenu.click();
    await this.dateTimemonthSelectOption.click();
    await this.dateTimeYearSelectMenu.click();
    await this.dateTimeYearSelectMenuOption.click();
    await this.dateTimeDaySelect.click();
    await this.dateTimeTimeSelect.click();      
  }

  async sliderFunctionality() {
    await this.homepage.widgetsLinkClick();
    await this.sliderLink.click();
    await this.page.waitForTimeout(1000);
    const sliderMove = this.slider;
    await sliderMove.dragTo(this.slider), { force: true };//.dragTo() drags the element to the specified target element.
    await this.page.waitForTimeout(1000);
    const sliderValue = await this.sliderValue.inputValue(); //.inputValue() directly fetches the current value of the input.
    expect(sliderValue).toBe("50");
  }

  async progressBarFunctionality() {
    await this.homepage.widgetsLinkClick();
    await this.progressbarLink.click();
    await this.startButton.click();
    await this.page.waitForTimeout(11000);
    await expect(this.progressBar).toHaveAttribute("aria-valuenow", "100");//.toHaveAttribute() checks if the element has the specified attribute with the specified value.
    await this.resetButton.click();    
  }

  async toolTipsFunctionality() {
    await this.homepage.widgetsLinkClick();
    await this.toolTipsLink.click();
    await this.toolTipsButton.hover();
    await expect(this.page.locator("button[aria-describedby='buttonToolTip']")).toBeVisible();
    await this.page.waitForTimeout(1000);
    await this.toolTipsBox.hover();
    await expect(this.page.locator("button[aria-describedby='buttonToolTip']")).toBeVisible();
    await this.page.waitForTimeout(1000);
    await this.toolTipsText.hover();
    await expect(this.page.locator("a[aria-describedby='contraryTexToolTip']")).toBeVisible();
    await this.page.waitForTimeout(1000);
    await this.toolTipsNumber.hover();
    await expect(this.page.locator("a[aria-describedby='sectionToolTip']")).toBeVisible();
  }

  async menuFunctionality() {
    await this.homepage.widgetsLinkClick();
    await this.menuLink.first().click();
    await this.mainItem2.hover();
    await this.subItem1.hover();
    await this.subSubList.hover();
    await this.subSubItem1.hover();
    await this.subSubItem2.hover();
    await this.subSubItem2.hover();
  }
}
