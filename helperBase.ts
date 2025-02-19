import { Locator, Page } from '@playwright/test'


export abstract class HelperBase {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}