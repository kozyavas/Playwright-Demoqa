import { Page } from "@playwright/test";
import { Homepage } from "./pages/Homepage";
import { ElementsPage } from "./pages/ElementsPage";

export class PageManager {
    page: Page;
    homepage: Homepage;
    elementspage: ElementsPage;

    constructor(page: Page) {
        this.page = page;
        this.homepage = new Homepage(this.page);
        this.elementspage = new ElementsPage(this.page);
    }
}