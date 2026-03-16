import { test, expect } from '@playwright/test';

test('homepage loads and shows latest post', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Paul Simpson/);
  await expect(page.locator('header nav')).toBeVisible();
  await expect(page.locator('section.first h1 a')).toBeVisible();
});

test('about page loads', async ({ page }) => {
  await page.goto('/about');
  await expect(page).toHaveTitle(/About | Paul Simpson/);
});

test('archives page loads', async ({ page }) => {
  await page.goto('/archives');
  await expect(page).toHaveTitle(/Archives | Paul Simpson/);
});

test('projects page loads', async ({ page }) => {
  await page.goto('/projects');
  await expect(page).toHaveTitle(/Projects | Paul Simpson/);
});

test('rss feed is valid xml', async ({ page }) => {
  const response = await page.goto('/rss.xml');
  expect(response?.status()).toBe(200);
  const contentType = response?.headers()['content-type'];
  expect(contentType).toMatch(/xml/);
});

test('post page loads with correct meta', async ({ page }) => {
  await page.goto('/posts/90-days-and-counting.html');
  await expect(page).toHaveTitle(/90 Days and Counting/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /.+/,
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    'content',
    'article',
  );
});
