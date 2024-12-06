"use server"

import { Client } from "@notionhq/client";

export async function createNotionPage(formData: FormData) {
  try {
    // Create a notion page in my database
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
    const databaseId = process.env.NOTION_DATABASE_ID
    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not set")
    }
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: formData.get("name") as string } }] },
        Email: { email: formData.get("email") as string },
        Company: { rich_text: [{ text: { content: formData.get("company") as string } }] },
        Message: { rich_text: [{ text: { content: formData.get("message") as string } }] }
      },
    })
  } catch (error) {
    console.error('Failed to create Notion page:', error);
    throw new Error('Failed to submit contact form. Please try again later.');
  }
} 