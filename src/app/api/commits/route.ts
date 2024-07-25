import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPO}/commits?sha=main`,
      {
          headers: {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
      }
    );

    const data = response.data;  

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch commits' }, { status: 500 });
  }
}
