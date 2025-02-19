import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helperBase";
import { Homepage } from "./Homepage";


export class ElementsPage extends HelperBase {
  homepage: Homepage;
  elementsPageText: Locator;
  textBoxLink: Locator;
  fullnameTextbox: Locator;
  emailTextbox: Locator;
  currentAddressTextbox: Locator;
  permanentAddressTextbox: Locator;
  submitButton: Locator;
  nameOutput: Locator;

  checkboxLink: Locator;
  checkbox1: Locator;
  checkbox2: Locator;
  checkbox3: Locator;
  classifiedCheckbox: Locator;

  radioButtonLink: Locator;
  yesButtonLink: Locator;
  impressiveButtonLink: Locator;

  webTablesLink: Locator;
  addButton: Locator;
  firstNameTextbox: Locator;
  lastNameTextbox: Locator;
  ageTextbox: Locator;
  salaryTextbox: Locator;
  departmentTextbox: Locator;
  editRecord4Button: Locator;
  deleteRecord4Button: Locator;

  buttonsLink: Locator;
  dblClickButton: Locator;
  rightClickButton: Locator;
  dynamicClickButton: Locator;

  linksLink: Locator;
  homeNewTabLink: Locator;
  createdApiCallLink: Locator;
  noContentApiCallLink: Locator;
  movedApiCallLink: Locator;
  badRequestApiCallLink: Locator;
  unauthorizedApiCallLink: Locator;
  forbiddenApiCallLink: Locator;
  notFoundApiCallLink: Locator;

  brokenLinksImagesLink: Locator;
  validImage: Locator;
  brokenImage: Locator;
  validLink: Locator;
  brokenLink: Locator;
  brokenLinkResult: Locator;

  uploadDownloadLink: Locator;
  downloadButton: Locator;
  chooseFileButton: Locator;
  uploadedFilePath: Locator;

  dynamicPropertiesLink: Locator;
  enableAfterButton: Locator;
  colorChangeButton: Locator;
  visibleAfterButton: Locator;
  

  constructor(page: Page) {
    super(page);

    this.homepage = new Homepage(page);
    this.elementsPageText = page.getByText(
      "Please select an item from left to start practice."
    );
    this.textBoxLink = page.getByText("Text Box");
    this.fullnameTextbox = page.locator("#userName");
    this.emailTextbox = page.locator("#userEmail");
    this.currentAddressTextbox = page.locator("#currentAddress");
    this.permanentAddressTextbox = page.locator("#permanentAddress");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.nameOutput = page.locator("#name");

    this.checkboxLink = page.getByText("Check Box");
    this.checkbox1 = page.getByLabel("Toggle");
    this.checkbox2 = page.getByLabel("Toggle").nth(2);
    this.checkbox3 = page.getByLabel("Toggle").nth(4);
    this.classifiedCheckbox = page.locator("span.rct-checkbox").nth(7);

    this.radioButtonLink = page.getByText("Radio Button");
    this.yesButtonLink = page.getByText("Yes");
    this.impressiveButtonLink = page.getByText("Impressive");

    this.webTablesLink = page.getByText("Web Tables");
    this.addButton = page.getByRole("button", { name: "Add" });
    this.firstNameTextbox = page.locator("#firstName");
    this.lastNameTextbox = page.locator("#lastName");
    this.emailTextbox = page.locator("#userEmail");
    this.ageTextbox = page.locator("#age");
    this.salaryTextbox = page.locator("#salary");
    this.departmentTextbox = page.locator("#department");
    this.editRecord4Button = page.locator("#edit-record-4");
    this.deleteRecord4Button = page.locator("#delete-record-4");

    this.buttonsLink = page.getByText("Buttons");
    this.dblClickButton = page.getByRole("button", { name: "Double Click Me" });
    this.rightClickButton = page.locator("#rightClickBtn");
    this.dynamicClickButton = page
      .locator('.btn.btn-primary:text("Click Me")')
      .nth(2);
    
    this.linksLink = page.locator(".text", { hasText: "Links" }).first();
    this.homeNewTabLink = page.locator("#simpleLink");
    this.createdApiCallLink = page.locator("#created");
    this.noContentApiCallLink = page.locator("#no-content");
    this.movedApiCallLink = page.locator("#moved");
    this.badRequestApiCallLink = page.locator("#bad-request");
    this.unauthorizedApiCallLink = page.locator("#unauthorized");
    this.forbiddenApiCallLink = page.locator("#not-found");

    this.brokenLinksImagesLink = page.getByText("Broken Links - Images");
    this.validImage = this.page.locator('img[src^="/images/Toolsqa.jpg"]').last();
    this.brokenImage = this.page.locator('img[src^="/images/Toolsqa_1.jpg"]');
    this.validLink = this.page.getByText("Click Here for Valid Link");
    this.brokenLink = this.page.getByText("Click Here for Broken Link");
    this.brokenLinkResult = this.page.getByText('here');

    this.uploadDownloadLink = page.getByText('Upload and Download');
    this.downloadButton = page.locator("#downloadButton");
    this.chooseFileButton = page.locator('#uploadFile');
    this.uploadedFilePath = page.locator('#uploadedFilePath');

    this.dynamicPropertiesLink = page.getByText('Dynamic Properties');
    this.enableAfterButton = page.locator('#enableAfter');
    this.colorChangeButton = page.locator('#colorChange');
    this.visibleAfterButton = page.locator('#visibleAfter');
  }

  async textboxFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.textBoxLink.click();
    await expect.soft(this.page).toHaveURL("https://demoqa.com/text-box");
    await this.fullnameTextbox.fill("Ken Ozzy");
    await this.emailTextbox.fill("Ken@ken.com");
    await this.currentAddressTextbox.fill("1090 Kennedy St, New Mexico");
    await this.permanentAddressTextbox.fill("1240 Billherd Ave, Kentucky");
    await this.submitButton.click();
    await expect.soft(this.nameOutput).toBeVisible();
  }

  async checkboxFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.checkboxLink.click();
    await expect.soft(this.page).toHaveURL("https://demoqa.com/checkbox");
    await this.checkbox1.click();
    await this.checkbox2.click();
    await this.checkbox3.click();
    await this.classifiedCheckbox.click();
  }

  async radioButtonFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.radioButtonLink.click();
    await expect.soft(this.page).toHaveURL("https://demoqa.com/radio-button");
    await this.yesButtonLink.click();
    await expect.soft(this.page.locator(".text-success")).toHaveText("Yes");
    await this.impressiveButtonLink.click();
    await expect
      .soft(this.page.locator(".text-success"))
      .toHaveText("Impressive");
  }

  async webTablesFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.webTablesLink.click();
    await expect.soft(this.page).toHaveURL("https://demoqa.com/webtables");
    await this.addButton.click();
    await expect
      .soft(this.page.locator("#registration-form-modal"))
      .toHaveText("Registration Form");
    await this.firstNameTextbox.fill("Ken");
    await this.lastNameTextbox.fill("Ozyy");
    await this.emailTextbox.fill("Kenzyy@gamil.com");
    await this.ageTextbox.fill("48");
    await this.salaryTextbox.fill("3000");
    await this.departmentTextbox.fill("IT");
    await this.submitButton.click();
    await expect.soft(this.page.locator("#delete-record-4")).toBeVisible();
    //edit the record
    await this.editRecord4Button.click();
    await this.ageTextbox.fill("49");
    await this.submitButton.click();
    await expect.soft(this.page.locator(".rt-td").nth(23)).toHaveText("49");
    //delete the record
    await this.deleteRecord4Button.click();
    await expect.soft(this.page.locator("#delete-record-4")).not.toBeVisible();
  }

  async buttonsFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.buttonsLink.click();
    await expect.soft(this.page).toHaveURL("https://demoqa.com/buttons");
    await this.dblClickButton.dblclick();
    await expect
      .soft(this.page.locator("#doubleClickMessage"))
      .toHaveText("You have done a double click");
    await this.rightClickButton.click({ button: "right" });
    await expect
      .soft(this.page.locator("#rightClickMessage"))
      .toHaveText("You have done a right click");
    await this.dynamicClickButton.click();
    await expect
      .soft(this.page.locator("#dynamicClickMessage"))
      .toHaveText("You have done a dynamic click");
  }

  async linksFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.linksLink.click();
    await expect.soft(this.page).toHaveURL("https://demoqa.com/links");

    // Step 4: Set up a promise to wait for a new page (tab) to open
    const pagePromise = this.page.context().waitForEvent("page");

    // Step 5: Click the link that opens a new tab (e.g., "Home" link that opens in a new tab)
    await this.homeNewTabLink.click();

    // Step 6: Wait for the new page (tab) to open and assign it to the `newPage` variable
    const newPage = await pagePromise;

    // Step 7: Wait for the new page to fully load
    await newPage.waitForLoadState();

    // Step 8: Click the "Elements" link on the new page --yeni sayfada yeni locator kullanmak gerekiyor:(
    await newPage.getByText("Elements").click();
    expect(
      newPage.getByText("Please select an item from left to start practice.")
    ).toBeVisible();
  }

  async apiLinksFunctionality() {
    // Step 1: Navigate to the Links page
    await this.homepage.elementsLinkClick();
    await this.linksLink.click();
    await expect.soft(this.page).toHaveURL("https://demoqa.com/links");

    // Step 2: Click the link and wait for the API response
    const apiResponse = await Promise.all([
      this.page.waitForResponse(
        (response) =>
          response.url() === "https://demoqa.com/created" &&
          response.request().method() === "GET"
      ),
      this.createdApiCallLink.click(),
    ]).then(([response]) => response);

    // Step 3: Assert the status code
    expect(apiResponse.status()).toBe(201);
  }

  async brokenLinkImagesFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.brokenLinksImagesLink.click();
    expect(this.validImage).toBeVisible();
    expect(this.brokenImage).toBeVisible();
    await this.validLink.click();
    await this.page.waitForTimeout(1000);
    expect(this.page).toHaveURL("https://demoqa.com/broken");
    await this.page.goBack();
    await this.brokenLink.click();   
    await this.brokenLinkResult.click();
    //expect(this.brokenLinkResult).toBeEnabled();
  }

  async uploadDownloadFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.uploadDownloadLink.click();
    await expect(this.downloadButton).toBeEnabled();
    await this.chooseFileButton.click();
    const fileInput = await this.page.waitForSelector('#uploadFile');
    const filePath = '../../../Desktop/new.txt';
    await fileInput.setInputFiles(filePath);
    expect(this.uploadedFilePath).toBeVisible();    
  }

  async dynamicPropertiesFunctionality() {
    await this.homepage.elementsLinkClick();
    await this.dynamicPropertiesLink.click();
    await expect(this.enableAfterButton).toBeVisible();
    await this.page.waitForTimeout(5000);
    await expect(this.enableAfterButton).toBeEnabled();
    await expect(this.colorChangeButton).toBeEnabled();
    await expect(this.visibleAfterButton).toBeVisible();
  }
  
}
