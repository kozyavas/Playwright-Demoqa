import { test } from "@playwright/test";
import { WidgetsPage} from '../pages/WidgetsPage';

test.describe("Widgets Functionality", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://demoqa.com");
    });


    test.describe("Widgets Functionality", () => {
        test("Auto Complete Functionality", async ({ page }) => {
            const widgetsPage = new WidgetsPage(page);
            await widgetsPage.autoCompleteFunctionality();
        });

        test("Date Picker Functionality", async ({ page }) => {
            const widgetsPage = new WidgetsPage(page);
            await widgetsPage.datePickerFunctionality();
        });

        test("Slider Functionality", async ({ page }) => {
            const widgetsPage = new WidgetsPage(page);
            await widgetsPage.sliderFunctionality();
        });
    });
});