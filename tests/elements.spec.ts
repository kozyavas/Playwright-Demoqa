import { test, expect } from "@playwright/test";
import { ElementsPage } from "../pages/ElementsPage";

test.describe("Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com");
  });

  test("Text Box functionality", async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.textboxFunctionality();
  });

  test('Check Box functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.checkboxFunctionality();
    //Classified checkbox clicked.
  });

  test('Radio Button functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.radioButtonFunctionality();
  });

  test('Web Tables functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.webTablesFunctionality();
  });

  test('Buttons functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.buttonsFunctionality();
  });
  
  test('Links Functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.linksFunctionality();
  })

  test('API call button functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.apiLinksFunctionality();
  });

  test('Broken Links-Images Functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.brokenLinkImagesFunctionality();
  });

  test('Upload and Download Functionality', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.uploadDownloadFunctionality();
  });

  test('Dynamic Properties', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.dynamicPropertiesFunctionality();
  })
  
})
