import { Locator, Page } from "@playwright/test";
import { HelperBase } from '../helperBase';

export class Homepage extends HelperBase {

    elementsLink: Locator;
    formsLink: Locator;
    alertsFrameWindowsLink: Locator;
    widgetsLink: Locator;
    interactionsLink: Locator;
    bookStoreAppLink: Locator;

    constructor(page: Page) {
        super(page);

        this.elementsLink = page.getByText("Elements");
        this.formsLink = page.getByText("Forms");
        this.alertsFrameWindowsLink = page.getByText("Alerts, Frame & Windows");
        this.widgetsLink = page.getByText("Widgets");
    }

    async elementsLinkClick() {
        await this.elementsLink.click();
    }

    async formsLinkClick() {
        await this.formsLink.click();
    }

    async alertFramesWindowsLinkClick() {
        await this.alertsFrameWindowsLink.click();
    }

    async widgetsLinkClick() {
        await this.widgetsLink.click();
    }
}