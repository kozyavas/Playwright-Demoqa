import { Locator, Page, expect} from '@playwright/test';
import { HelperBase } from "../helperBase";
import { Homepage } from "./Homepage";

export class FormsPage extends HelperBase {
    homepage: Homepage;
    formsLink: Locator;

    practiceFormLink: Locator;
    studentRegistrationFormText: Locator;
    firstNameTextBox: Locator;
    lastNameTextBox: Locator;
    emailTextBox: Locator;
    maleRadioButton: Locator;
    femaleRadioButton: Locator;
    otherRadioButton: Locator;
    mobileTextBox: Locator;
    dobDatePickerBox: Locator;
    dobMonthDropDown: Locator;
    dobYearDropDown: Locator;
    dobPickDay: Locator;
    subjectsContainer: Locator;
    hobbiesSportsCheckBox: Locator;
    hobbiesReadingCheckBox: Locator;
    hobbiesMusicCheckBox: Locator;
    pictureChooseFileButton: Locator;
    currentAddressBox: Locator;
    stateDropDown: Locator;
    selectState: Locator;
    cityDropDown: Locator;
    selectCity: Locator;
    submitButton: Locator;
    

    constructor(page: Page) {
        super(page);

        this.homepage = new Homepage(page);
        this.formsLink = page.getByText('Forms');
        
        this.practiceFormLink = page.getByText('Practice Form');
        this.studentRegistrationFormText = page.getByText('Student Registration Form');
        this.firstNameTextBox = page.locator('#firstName');
        this.lastNameTextBox = page.locator('#lastName');
        this.emailTextBox = page.locator('#userEmail');
        this.maleRadioButton = page.getByText("Male").nth(1);
        this.femaleRadioButton = page.getByText("Female");
        this.otherRadioButton = page.getByText('Other');
        this.mobileTextBox = page.locator('#userNumber');
        this.dobDatePickerBox = page.locator("#dateOfBirthInput");
        this.dobMonthDropDown = page.locator(".react-datepicker__month-select");
        this.dobYearDropDown = page.locator(".react-datepicker__year-select");
        this.dobPickDay = page.locator(".react-datepicker__day.react-datepicker__day--011");
        this.subjectsContainer = page.locator("#subjectsContainer");
        this.hobbiesSportsCheckBox = page.locator("#hobbies-checkbox-1");
        this.hobbiesReadingCheckBox = page.locator("#hobbies-checkbox-2");
        this.hobbiesMusicCheckBox = page.locator("#hobbies-checkbox-3");
        this.pictureChooseFileButton = page.locator("#uploadPicture");
        this.currentAddressBox = page.locator("#currentAddress");
        this.stateDropDown = page.locator('#state');
        this.cityDropDown = page.locator('#city');
        this.selectState = page.getByText('Haryana');
        this.selectCity = page.getByText('Panipat').first();
        this.submitButton = page.locator('#submit');

    }

    async practiceFormFunctionality() {
        await this.homepage.formsLink.click();
        await this.practiceFormLink.click();        
        await this.firstNameTextBox.fill('Cuneyt');
        await this.lastNameTextBox.fill('Arkin');
        await this.emailTextBox.fill('carkin@gmaill.com');
        await this.page.waitForTimeout(1000);
        await this.maleRadioButton.click();
        await this.mobileTextBox.fill('0612345678');
        await this.dobDatePickerBox.click();
        await this.dobMonthDropDown.selectOption({ value: '3' });
        await this.dobYearDropDown.selectOption({ label: '1976' });
        await this.dobPickDay.click();
        await this.page.waitForTimeout(1000);
        await this.page.evaluate(() => {
            var container= document.querySelector("#subjectsContainer");
          container.textContent = "History, Math";
        });
        await this.hobbiesReadingCheckBox.click({force:true});
        await this.hobbiesMusicCheckBox.click({ force: true });
        await this.pictureChooseFileButton.click();
        const fileInput = await this.page.waitForSelector("#uploadPicture");
        const filePath = "../../../Desktop/new.txt";
        await fileInput.setInputFiles(filePath);
        await this.currentAddressBox.fill('Tomm Straat 21, 6647RX Eindhoven');
        await this.stateDropDown.click();
        await this.selectState.click();
        await this.cityDropDown.click();
        await this.selectCity.click();
        await this.submitButton.click();
    }

}