import { test } from "@playwright/test";
import { AlertsFrameWindowsPage } from '../pages/AlertsFrameWindowsPage';

test.describe("Alerts, Frame & Windows Functionality", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://demoqa.com");
    });


    test.describe("Alerts, Frame & Windows Functionality", () => {
        test("Browser Windows - New Tab", async ({ page }) => {
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.newTabFunctionality();
        });

        test("Browser Windows - New Window", async ({ page }) => {
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.newWindowFunctionality();
        });

        test('Browser Windows - New Window Message', async ({ page }) => {
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.newWindowMsgFunctionality();
        })

        test('Alerts', async ({ page }) => {
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.alertsFunctionality();
        })

        test('Iframes', async ({ page }) => {
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.iframesFunctionality();
        });

        test('Nested Frames', async ({ page }) => {
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.nestedFramesFunctionality();
        });

        test('Modal Dialogs', async ({ page })=>{
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.modalDialogsFunction();
        })

        test('Auto Complete', async ({ page }) => {
            const alertsFrameWindowsPage = new AlertsFrameWindowsPage(page);
            await alertsFrameWindowsPage.autoCompleteFunctionality();
        });
    
    });
});