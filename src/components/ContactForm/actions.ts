"use server"

import { Client } from "@notionhq/client";

let client: Client | null = null;

function getNotionClient(): Client {
  if (!client) {
    client = new Client({ auth: process.env.NOTION_API_KEY });
  }

  return client;
}

export async function addContactEntryToNotion(formData: FormData) {
  try {
    const notion = getNotionClient();
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error("Leads database is not set.");
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: formData.get("name") as string } }] },
        Email: { email: formData.get("email") as string },
        Company: { rich_text: [{ text: { content: formData.get("company") as string } }] },
        Message: { rich_text: [{ text: { content: formData.get("message") as string } }] }
      },
    });

  } catch (error) {
    throw new Error('Failed to submit contact form. Please try again later.', { cause: error });
  }
}

type TrackingInfo = {
  slug: string;
  path: string;
};

export async function addTrackingInformationToNotion(trackingInfo: TrackingInfo) { 
  try {
    const notion = getNotionClient();
    const databaseId = process.env.NOTION_TRACKING_DATABASE_ID;
    
    if (!databaseId) {
      throw new Error("Tracking database is not set.")
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Slug: { title: [{ text: { content: trackingInfo.slug } }] },
        Path: { rich_text: [{ text: { content: trackingInfo.path } }] }
      },
    });

  } catch (error) {
    throw new Error('Failed to submit tracking information.', { cause: error });
  }
}