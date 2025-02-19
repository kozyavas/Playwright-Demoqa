import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helperBase";
import { Homepage } from "./Homepage";
import { resolve } from "path";

export class AlertsFrameWindowsPage extends HelperBase {
  homepage :Homepage;    

  browserWindowsLink: Locator;
  newTabButton: Locator;
  newWindowButton: Locator;
  newWindowMsg: Locator;
  newTabWindowMsg: Locator;
  
  alertsLink: Locator;
  alertButton: Locator;
  timerAlertButton: Locator;
  confirmButton: Locator;
  confirmResult: Locator;
  promptButton: Locator;
  promptResult: Locator;

    constructor(page: Page) {
      super(page);

      this.homepage = new Homepage(page);
      

      this.browserWindowsLink = page.getByText('Browser Windows');
      this.newTabButton = page.locator('#tabButton');
      this.newWindowButton = page.locator("#windowButton");
      this.newWindowMsg = page.locator("#messageWindowButton");
      this.newTabWindowMsg = page.getByText('This is a sample page');

      this.alertsLink = page.getByText("Alerts").last();
      this.alertButton = page.locator('#alertButton');
      this.timerAlertButton = page.locator('#timerAlertButton');
      this.confirmButton = page.locator('#confirmButton');
      this.confirmResult = page.locator('#confirmResult');
      this.promptButton = page.locator('#promtButton');
      this.promptResult = page.locator('#promptResult');


    }

    async newTabFunctionality() {
      await this.homepage.alertsFrameWindowsLink.click();
      await this.browserWindowsLink.click();

      // Step 4: Set up a promise to wait for a new page (tab) to open
      const pagePromise = this.page.context().waitForEvent("page");

      // Step 5: Click the link that opens a new tab
      await this.newTabButton.click();

      // Step 6: Wait for the new page (tab) to open and assign it to the `newPage` variable
      const newTab = await pagePromise;

      // Step 7: Wait for the new page to fully load
      await newTab.waitForLoadState('load');

      // Step 8: Click the "Elements" link on the new page --yeni sayfada yeni locator kullanmak gerekiyor:(
      expect(newTab.locator("#sampleHeading")).toBeVisible();
      //expect(newTab).toHaveTitle("https://demoqa.com/sample");
    }

    async newWindowFunctionality() {
      await this.homepage.alertsFrameWindowsLink.click();
      await this.browserWindowsLink.click();
      
      // Step 4: Set up a promise to wait for a new page (tab) to open
        const pagePromise = this.page.context().waitForEvent("page");        

      // Step 5: Click the link that opens a new tab
      await this.newWindowButton.click();

      // Step 6: Wait for the new page (tab) to open and assign it to the `newPage` variable
      const newWindow = await pagePromise;

      // Step 7: Wait for the new page to fully load
      await newWindow.waitForLoadState('load');

      // Step 8: Click the "Elements" link on the new page --yeni sayfada yeni locator kullanmak gerekiyor:(
      await expect(newWindow.locator("#sampleHeading")).toBeVisible();
      //expect(newTab).toHaveTitle("https://demoqa.com/sample");
  }
  
  async newWindowMsgFunctionality() {
    await this.homepage.alertsFrameWindowsLink.click();
    await this.browserWindowsLink.click();

    //Listen for the new window
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"), //Wait for new window
      await this.newWindowMsg.click(), // Click the button that opens the new window
    ]);

    // Wait for the message or content you want to check in the new window
    const message = await newPage.getByText('Knowledge').textContent();
    expect(message).toContain('Knowledge');
  };

  async alertsFunctionality() {
    await this.homepage.alertFramesWindowsLinkClick();
    await this.alertsLink.click();

    //Click Button to see alert
    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("You clicked a button");
      await dialog.accept();
    });
    await this.alertButton.click();

    //On button click, alert will appear after 5 seconds
    const dialogPromise = new Promise<void>((resolve) => {
      this.page.once("dialog", async (dialog) => {
        expect(dialog.message()).toBe("This alert appeared after 5 seconds");
        await dialog.accept();
        resolve();
      });
    });
    await this.timerAlertButton.click();
    await dialogPromise;

    //On button click, confirm box will appear then click OK
    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Do you confirm action?");
      await dialog.accept();
    });
    await this.confirmButton.click();

    //On button click, confirm box will appear
    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Do you confirm action?");
      await dialog.accept();
    });
    await this.confirmButton.click();
    expect(this.confirmResult).toContainText("Ok");

    //On button click, confirm box will appear then click Cancel
    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Do you confirm action?");
      await dialog.dismiss();
    });
    await this.confirmButton.click();
    expect(this.confirmResult).toContainText("Cancel");

    //On button click, prompt box will appear then enter text then Ok
    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Please enter your name");
      await dialog.accept("Kenan");
    });
    await this.promptButton.click();
    expect(this.promptResult).toContainText("Kenan");

    //On button click, prompt box will appear then Cancel
    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Please enter your name");
      await dialog.dismiss();
    });
    await this.promptButton.click();    
  }
}