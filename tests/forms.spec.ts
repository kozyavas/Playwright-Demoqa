import { test } from "@playwright/test";
import { FormsPage } from "../pages/FormsPage";

test.describe("Forms", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://demoqa.com");
    });

    test("Practice Form functionality", async ({ page }) => {
        const formsPage = new FormsPage(page);
        await formsPage.practiceFormFunctionality();
    });
});